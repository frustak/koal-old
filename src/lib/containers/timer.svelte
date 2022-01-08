<script lang="ts">
	import { browser } from '$app/env';
	import Button from '$lib/components/button.svelte';
	import { persist } from '$lib/stores/persist';
	import { addSeconds, differenceInSeconds } from 'date-fns';
	import { Howl } from 'howler';
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import * as workerTimers from 'worker-timers';

	const DEFAULT_DURATION = 1500;

	enum TimerState {
		NotStarted = 'not-started',
		Running = 'running',
		Paused = 'paused'
	}

	let intervalId: number;
	let timerState = persist('timer-state', TimerState.NotStarted);
	let timer = persist('timer', DEFAULT_DURATION);
	let targetDate = persist<Date | null>('target-date', null, {
		parse: (str) => new Date(Number.parseInt(str)) ?? null,
		stringify: (date) => `${date ? +date : null}`
	});
	let sound: Howl;

	onMount(() => {
		if (Notification.permission !== 'denied') Notification.requestPermission();
		if ($timerState === TimerState.Running) {
			updateTimer();
			startTimer();
		}

		sound = new Howl({
			src: ['alarm.wav']
		});
	});

	$: if (browser && $timer <= 0) completeTimer();
	$: if (browser && $timerState !== TimerState.Running) workerTimers.clearInterval(intervalId);

	function startTimer() {
		$targetDate = addSeconds(Date.now(), $timer);
		intervalId = workerTimers.setInterval(updateTimer, 100);
		$timerState = TimerState.Running;
	}

	function resetTimer() {
		$targetDate = null;
		$timer = DEFAULT_DURATION;
		$timerState = TimerState.NotStarted;
	}

	function pauseTimer() {
		$timerState = TimerState.Paused;
	}

	function updateTimer() {
		$timer = differenceInSeconds($targetDate!, Date.now()) + 1;
	}

	function getDisplayTime(remained: number) {
		const minutesStr = Math.floor(remained / 60).toString();
		const minutesPadded = _.padStart(minutesStr, 2, '0');
		const secondsStr = Math.floor(remained % 60).toString();
		const secondsPadded = _.padStart(secondsStr, 2, '0');
		const text = `${minutesPadded}:${secondsPadded}`;
		return text;
	}

	function completeTimer() {
		new Notification('Times up!');
		resetTimer();
		sound.play();
	}
</script>

<section class="flex flex-col items-center p-1 gap-y-8">
	<p class="items-stretch font-mono font-thin text-center text-8xl md:text-9xl">
		{getDisplayTime($timer)}
	</p>

	<div class="grid self-stretch grid-cols-2 gap-x-6">
		{#if $timerState === TimerState.NotStarted}
			<div class="flex col-span-2">
				<Button on:click={startTimer}>Start</Button>
			</div>
		{:else}
			<Button on:click={resetTimer}>Reset</Button>
			{#if $timerState === TimerState.Paused}
				<Button on:click={startTimer}>Resume</Button>
			{:else}
				<Button on:click={pauseTimer}>Pause</Button>
			{/if}
		{/if}
	</div>
</section>

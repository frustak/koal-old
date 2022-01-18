<script lang="ts">
	import { browser } from '$app/env';
	import { getDisplayTime } from '$lib/utils/display';
	import { persist } from '$lib/utils/persist';
	import { addSeconds, differenceInSeconds } from 'date-fns';
	import { Howl } from 'howler';
	import { onMount } from 'svelte';
	import * as workerTimers from 'worker-timers';

	const DEFAULT_DURATION = 1500;

	enum TimerState {
		NotStarted = 'not-started',
		Running = 'running',
		Paused = 'paused',
	}

	let intervalId: number;
	let timerState = persist('timer-state', TimerState.NotStarted);
	let timer = persist('timer', DEFAULT_DURATION);
	let targetDate = persist<Date | null>('target-date', null, {
		parse: (str) => new Date(Number.parseInt(str)) ?? null,
		stringify: (date) => `${date ? +date : null}`,
	});
	let sound: Howl;

	onMount(() => {
		if (Notification.permission !== 'denied') Notification.requestPermission();
		if ($timerState === TimerState.Running) {
			updateTimer();
			startTimer();
		}

		sound = new Howl({
			src: ['alarm.wav'],
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
		if ($targetDate) {
			$timer = differenceInSeconds($targetDate, Date.now()) + 1;
		} else {
			console.error('Tried to update timer while there was no date set.');
		}
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
				<button class="button" on:click={startTimer}>Start</button>
			</div>
		{:else}
			<button class="button" on:click={resetTimer}>Reset</button>
			{#if $timerState === TimerState.Paused}
				<button class="button" on:click={startTimer}>Resume</button>
			{:else}
				<button class="button" on:click={pauseTimer}>Pause</button>
			{/if}
		{/if}
	</div>
</section>

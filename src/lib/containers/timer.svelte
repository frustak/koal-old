<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import { addSeconds, differenceInSeconds } from 'date-fns';
	import _ from 'lodash';
	import * as workerTimers from 'worker-timers';

	const DEFAULT_DURATION = 1500;

	enum TimerState {
		NotStarted = 'not-started',
		Running = 'running',
		Paused = 'paused'
	}

	let timerState: TimerState = TimerState.NotStarted;
	let targetDate: Date | null = null;
	let intervalId: number;
	let timer = DEFAULT_DURATION;

	function startTimer() {
		targetDate = addSeconds(Date.now(), timer);
		intervalId = workerTimers.setInterval(updateTimer, 100);
		timerState = TimerState.Running;
	}

	function resetTimer() {
		targetDate = null;
		timer = DEFAULT_DURATION;
		workerTimers.clearInterval(intervalId);
		timerState = TimerState.NotStarted;
	}

	function updateTimer() {
		timer = differenceInSeconds(targetDate!, Date.now()) + 1;
	}

	function pauseTimer() {
		timerState = TimerState.Paused;
		workerTimers.clearInterval(intervalId);
	}

	function getTimerDisplayText(remained: number) {
		const minutesStr = Math.floor(remained / 60).toString();
		const minutesPadded = _.padStart(minutesStr, 2, '0');
		const secondsStr = Math.floor(remained % 60).toString();
		const secondsPadded = _.padStart(secondsStr, 2, '0');
		const text = `${minutesPadded}:${secondsPadded}`;
		return text;
	}
</script>

<section class="gap-y-8 flex flex-col items-center p-1">
	<p class="text-9xl font-thin items-stretch text-center font-mono">
		{getTimerDisplayText(timer)}
	</p>

	<div class="flex self-stretch gap-x-6">
		{#if timerState === TimerState.NotStarted}
			<Button on:click={startTimer}>Start</Button>
		{:else}
			<Button on:click={resetTimer}>Reset</Button>
			{#if timerState === TimerState.Paused}
				<Button on:click={startTimer}>Resume</Button>
			{:else}
				<Button on:click={pauseTimer}>Pause</Button>
			{/if}
		{/if}
	</div>
</section>

import _ from 'lodash';

export function getDisplayTime(remained: number): string {
	const minutesStr = Math.floor(remained / 60).toString();
	const minutesPadded = _.padStart(minutesStr, 2, '0');
	const secondsStr = Math.floor(remained % 60).toString();
	const secondsPadded = _.padStart(secondsStr, 2, '0');
	const text = `${minutesPadded}:${secondsPadded}`;
	return text;
}

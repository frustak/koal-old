import { persist } from '$lib/utils/persist';

export const DEFAULT_DURATION = 1500;

export const timer = persist('timer', DEFAULT_DURATION);

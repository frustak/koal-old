import { persist } from './persist';

export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

export const theme = persist<Theme>('theme', Theme.Light);

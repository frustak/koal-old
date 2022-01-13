import { persist } from './persist';

export enum Theme {
	Light = 'light',
	Dark = 'dark',
	Gruvbox = 'gruvbox',
	Void = 'void',
	Blue = 'blue',
	Green = 'green',
}

export const theme = persist<Theme>('theme', Theme.Light);

export function changeTheme(): void {
	theme.update((prevTheme) => {
		switch (prevTheme) {
			case Theme.Light:
				return Theme.Dark;
			case Theme.Dark:
				return Theme.Gruvbox;
			case Theme.Gruvbox:
				return Theme.Void;
			case Theme.Void:
				return Theme.Blue;
			case Theme.Blue:
				return Theme.Green;
			case Theme.Green:
				return Theme.Light;
			default:
				return Theme.Light;
		}
	});
}

export function getThemeBg(theme: Theme): string {
	switch (theme) {
		case Theme.Light:
			return '#fafaf9';
		case Theme.Dark:
			return '#44403c';
		case Theme.Gruvbox:
			return '#282828';
		case Theme.Void:
			return '#10002b';
		case Theme.Blue:
			return '#a8dadc';
		case Theme.Green:
			return '#ecf39e';
		default:
			return 'white';
	}
}

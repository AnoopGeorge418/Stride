import { Themes } from '../constants/themes';

export type ThemeModes = 'light' | 'dark';

export interface ThemeContextType {
	themeMode: ThemeModes;
	theme: typeof Themes.LightMode | typeof Themes.DarkMode;
	setThemeMode: (mode: ThemeModes) => void;
	toggleTheme: () => void;
}

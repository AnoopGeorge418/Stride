// src/contexts/ThemeContext.tsx
import { Themes } from '@/constants/themes';
import { ThemeContextType, ThemeModes } from '@/types/themeType';
import React, {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// OS theme is the source of truth. Unknown/null falls back to light.
	const systemScheme = useColorScheme();
	const systemMode: ThemeModes = systemScheme === 'dark' ? 'dark' : 'light';

	// Manual override from the toggle. null = follow the phone.
	const [override, setOverride] = useState<ThemeModes | null>(null);
	const themeMode: ThemeModes = override ?? systemMode;

	const setThemeMode = useCallback(
		(mode: ThemeModes) => setOverride(mode),
		[],
	);
	const toggleTheme = useCallback(
		() => setOverride(themeMode === 'light' ? 'dark' : 'light'),
		[themeMode],
	);

	const value = useMemo<ThemeContextType>(
		() => ({
			themeMode,
			theme: themeMode === 'dark' ? Themes.DarkMode : Themes.LightMode,
			setThemeMode,
			toggleTheme,
		}),
		[themeMode, setThemeMode, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const useCustomTheme = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error('useCustomTheme must be used within a ThemeProvider');
	return context;
};

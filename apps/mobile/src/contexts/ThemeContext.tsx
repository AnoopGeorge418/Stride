import { Themes } from '@/constants/themes';
import { ThemeContextType, ThemeModes } from '@/types/themeType';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// Default strictly to light mode as requested
	const [themeMode, setThemeMode] = useState<ThemeModes>('light');

	const toggleTheme = () => {
		setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const theme = themeMode === 'dark' ? Themes.DarkMode : Themes.LightMode;

	return (
		<ThemeContext.Provider
			value={{ themeMode, theme, setThemeMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useCustomTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

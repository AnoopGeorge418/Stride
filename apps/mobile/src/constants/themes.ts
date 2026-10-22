/**
 * List of semantic colors used for the project for both light and dark themes.
 * Names are designed to clearly indicate their intended UI usage.
 */
export const Themes = {
	LightMode: {
		surface: {
			appBackground: '#FFFFFF',
			cardBackground: '#FFFFFF',
			cardBackgroundHover: '#F9FAFB',
			mutedBackground: '#F3F4F6',
			subtleBackground: '#E5E7EB',
			buttonBackground: '#000000',
		},
		typography: {
			mainHeading: '#121212',
			bodyText: '#374151',
			mutedText: '#6B7280',
			subtleText: '#9CA3AF',
			inverseText: '#FFFFFF',
		},
		borders: {
			subtle: '#E5E7EB',
			default: '#D1D5DB',
			strong: '#9CA3AF',
			focus: '#2563EB',
		},
		status: {
			successBackground: '#DEF7EC',
			successText: '#03543F',
			warningBackground: '#FEF08A',
			warningText: '#713F12',
			errorBackground: '#FDE8E8',
			errorText: '#9B1C1C',
			infoBackground: '#E1EFFE',
			infoText: '#1E429F',
		},
		interactive: {
			primaryBackground: '#2563EB',
			primaryBackgroundHover: '#1D4ED8',
			primaryText: '#FFFFFF',
			secondaryBackground: '#F3F4F6',
			secondaryBackgroundHover: '#E5E7EB',
			secondaryText: '#374151',
		},
	},
	DarkMode: {
		surface: {
			appBackground: '#000000',
			cardBackground: '#121212',
			cardBackgroundHover: '#1E1E1E',
			mutedBackground: '#1F2937',
			subtleBackground: '#2C2C2C',
			buttonBackground: '#ffffff',
		},
		typography: {
			mainHeading: '#F9FAFB',
			bodyText: '#E5E7EB',
			mutedText: '#9CA3AF',
			subtleText: '#6B7280',
			inverseText: '#121212',
		},
		borders: {
			subtle: '#1F2937',
			default: '#374151',
			strong: '#4B5563',
			focus: '#3B82F6',
		},
		status: {
			successBackground: '#064E3B',
			successText: '#A7F3D0',
			warningBackground: '#78350F',
			warningText: '#FEF08A',
			errorBackground: '#7F1D1D',
			errorText: '#FECACA',
			infoBackground: '#1E3A8A',
			infoText: '#BFDBFE',
		},
		interactive: {
			primaryBackground: '#3B82F6',
			primaryBackgroundHover: '#2563EB',
			primaryText: '#FFFFFF',
			secondaryBackground: '#1F2937',
			secondaryBackgroundHover: '#374151',
			secondaryText: '#E5E7EB',
		},
	},
} as const;

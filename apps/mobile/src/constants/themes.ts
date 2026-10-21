/**
 * List of colors used for the project for both dark and light mode themes.
 * These map to the CSS variables defined in global.css.
 */
export const Themes = {
	LightMode: {
		surface: {
			canvas: '#F8F9FA',
			surface_default: '#FFFFFF',
			surface_container_low: '#F3F4F6',
			surface_container_high: '#E5E7EB',
			surface_glass: 'rgba(255, 255, 255, 0.85)',
			card_highlight: '#FFF9F4',
		},
		typography: {
			primary: '#121212',
			secondary: '#4B5563',
			muted: '#9CA3AF',
			inverse: '#FFFFFF',
		},
		borders: {
			subtle: 'rgba(0, 0, 0, 0.06)',
			default: 'rgba(0, 0, 0, 0.12)',
			focused: '#121212',
		},
		accents: {
			primary: '#121212',
			active_pill: '#18181B',
			cyan: '#0EA5E9',
			emerald: '#10B981',
			amber: '#F59E0B',
			purple: '#8B5CF6',
			rose: '#EF4444',
		},
		status_badges: {
			completed: { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0' },
			in_progress: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A' },
			scheduled: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
			priority_high: {
				bg: '#FEF2F2',
				text: '#991B1B',
				border: '#FECACA',
			},
		},
	},
	DarkMode: {
		surface: {
			canvas: '#0B0C0E',
			surface_default: '#121418',
			surface_container_low: '#16181D',
			surface_container_high: '#1E2229',
			surface_glass: 'rgba(22, 24, 29, 0.88)',
			card_highlight: '#1A1D24',
		},
		typography: {
			primary: '#F3F4F6',
			secondary: '#9CA3AF',
			muted: '#6B7280',
			inverse: '#121212',
		},
		borders: {
			subtle: 'rgba(255, 255, 255, 0.06)',
			default: 'rgba(255, 255, 255, 0.12)',
			focused: '#F3F4F6',
		},
		accents: {
			primary: '#FFFFFF',
			active_pill: '#FFFFFF',
			cyan: '#38BDF8',
			emerald: '#34D399',
			amber: '#FBBF24',
			purple: '#A78BFA',
			rose: '#F87171',
		},
		status_badges: {
			completed: {
				bg: 'rgba(16, 185, 129, 0.15)',
				text: '#34D399',
				border: 'rgba(16, 185, 129, 0.3)',
			},
			in_progress: {
				bg: 'rgba(245, 158, 11, 0.15)',
				text: '#FBBF24',
				border: 'rgba(245, 158, 11, 0.3)',
			},
			scheduled: {
				bg: 'rgba(59, 130, 246, 0.15)',
				text: '#60A5FA',
				border: 'rgba(59, 130, 246, 0.3)',
			},
			priority_high: {
				bg: 'rgba(239, 68, 68, 0.15)',
				text: '#F87171',
				border: 'rgba(239, 68, 68, 0.3)',
			},
		},
	},
} as const;

import { useCustomTheme } from '@/contexts/ThemeContext';
import { Text, View } from 'react-native';
import { Logo } from '../artificats/Logo';

export const Navbar = () => {
	const { theme } = useCustomTheme();

	return (
		<View
			style={{
				backgroundColor: theme.status_badges.scheduled.bg,
				padding: 10,
				borderRadius: 10,
			}}>
			<Logo />
		</View>
	);
};

import { useCustomTheme } from '@/contexts/ThemeContext';
import { GeistMono_100Thin } from '@expo-google-fonts/geist-mono';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export const Footer = () => {
	const { theme } = useCustomTheme();

	return (
		<View className="flex justify-center items-center">
			<Text
				style={{
					fontFamily: 'GeistMono',
					lineHeight: 24,
					textAlign: 'center',
					width: '90%',
					color: theme.typography.subtleText,
					letterSpacing: 2,
				}}>
				Crafted & Developed with Passion and Excitement by
				<Text> </Text>
				<Link
					href="https://anoopgeorge.vercel.app/"
					style={{
						fontFamily: 'GeistMono-Bold',
						textDecorationStyle: 'double',
						textDecorationLine: 'underline',
						color: theme.typography.mainHeading,
					}}>
					Anoop George
				</Link>
			</Text>
		</View>
	);
};

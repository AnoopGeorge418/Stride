// src/components/layouts/Footer.tsx
import { useCustomTheme } from '@/contexts/ThemeContext';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export const Footer = () => {
	const { theme } = useCustomTheme();

	return (
		<View style={styles.wrap}>
			<Text
				maxFontSizeMultiplier={1.2}
				style={[styles.text, { color: theme.typography.subtleText }]}>
				Crafted & Developed with Passion and Excitement by{' '}
				<Link
					href="https://anoopgeorge.vercel.app/"
					style={[
						styles.link,
						{ color: theme.typography.mainHeading },
					]}>
					Anoop George
				</Link>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrap: { alignItems: 'center', justifyContent: 'center' },
	text: {
		fontFamily: 'GeistMono',
		lineHeight: 24,
		textAlign: 'center',
		width: '90%',
		letterSpacing: 2,
	},
	link: {
		fontFamily: 'GeistMono-Bold',
		textDecorationStyle: 'double',
		textDecorationLine: 'underline',
	},
});

// src/components/artificats/Logo.tsx
import { useCustomTheme } from '@/contexts/ThemeContext';
import AppIconBlack from '@assets/icons/logo.png';
import AppIconWhite from '@assets/images/splash-icon.png';
import { Image, StyleSheet, Text, View } from 'react-native';

export const Logo = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
		<View style={styles.row}>
			<Image
				source={themeMode === 'dark' ? AppIconWhite : AppIconBlack}
				style={styles.icon}
			/>
			<Text
				maxFontSizeMultiplier={1.25}
				style={[styles.text, { color: theme.typography.mainHeading }]}>
				Stride
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	row: { flexDirection: 'row', alignItems: 'center' },
	icon: { width: 25, height: 25 },
	text: { fontFamily: 'Lora-Bold', fontSize: 20 },
});

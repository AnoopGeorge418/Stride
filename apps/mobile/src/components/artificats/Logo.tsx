import { Image, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import AppIcon from '@assets/icons/logo.png';
import { useCustomTheme } from '@/contexts/ThemeContext';

export const Logo = () => {
	const { theme } = useCustomTheme();

	return (
		<View className="flex flex-row justify-center items-center">
			<Image source={AppIcon} style={{ width: 25, height: 25 }} />
			<Text
				style={[Styles.logoText, { color: theme.typography.primary }]}>
				Stride
			</Text>
		</View>
	);
};

const Styles = StyleSheet.create({
	logoText: { fontFamily: 'Lora-Bold', fontSize: 20 },
});

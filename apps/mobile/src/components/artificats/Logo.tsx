import { Image } from 'react-native';
import { Text, View } from 'react-native';
import AppIconBlack from '@assets/icons/logo.png';
import AppIconWhite from '@assets/images/splash-icon.png';

import { useCustomTheme } from '@/contexts/ThemeContext';

export const Logo = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
		<View className="flex flex-row justify-center items-center">
			<Image
				source={themeMode === 'dark' ? AppIconWhite : AppIconBlack}
				style={{ width: 25, height: 25 }}
			/>
			<Text
				style={{
					fontFamily: 'Lora-Bold',
					fontSize: 20,
					color: theme.typography.mainHeading,
				}}>
				Stride
			</Text>
		</View>
	);
};

import { Image, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import AppIcon from '@assets/icons/logo.png';

export const Logo = () => {

	return (
		<View className="flex flex-row justify-center items-center">
			<Image source={AppIcon} style={{ width: 25, height: 25 }} />
			<Text style={Styles.logoText}>
                Stride
			</Text>
		</View>
	);
};

const Styles = StyleSheet.create({
	logoText: { fontFamily: 'Lora-Bold', fontSize: 20 },
});

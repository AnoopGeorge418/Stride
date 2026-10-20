import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
	return (
		<View className="flex-1 items-center justify-center bg-white p-4">
			<Text
				style={styles.font}
				className="text-xl bg-red-50 p-4 rounded-xl">
				Welcome to Expo React Native - Nativewind!
			</Text>
		</View>
	);
};

export default Index;

// styles
const styles = StyleSheet.create({
	font: { fontFamily: 'Lora-Italic', fontSize: 20 },
});

import { Navbar } from '@/components/layouts/Navbar';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
	return (
		<View className="flex-1 items-center justify-center bg-white p-4">
			<Navbar />
		</View>
	);
};

export default Index;

// styles
const styles = StyleSheet.create({
	font: { fontFamily: 'Lora-Italic', fontSize: 20 },
});

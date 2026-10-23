import { GridBackground } from '@/components/artificats/GridBackground';
import { useCustomTheme } from '@/contexts/ThemeContext';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const AuthSelectionPage = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: theme.surface.appBackground }}>
			<GridBackground variant="lines" spacing={24} opacity={0.5}>
				<View style={{ flex: 1, marginHorizontal: 20, paddingBottom: 20 }}>
				    <Text> </Text>
				</View>
			</GridBackground>
		</SafeAreaView>
	);
};

export default AuthSelectionPage;

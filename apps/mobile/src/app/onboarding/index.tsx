// src/app/onboarding/index.tsx
import { Button } from '@/components/artificats/Button';
import { Card } from '@/components/artificats/Card';
import { CorousalDots } from '@/components/artificats/corousalDots';
import { GridBackground } from '@/components/artificats/GridBackground';
import { Navbar } from '@/components/layouts/Navbar';
import { Footer } from '@/components/layouts/Footer';
import { useCustomTheme } from '@/contexts/ThemeContext';
import { Text, View  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const OnboardingPage = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: theme.surface.appBackground }}>
			<GridBackground variant="lines" spacing={24} opacity={0.5}>
				<View style={{ flex: 1, marginHorizontal: 20, paddingBottom: 20 }}>
					<Text>Hello</Text>
				</View>
			</GridBackground>
		</SafeAreaView>
	);
};

export default OnboardingPage;

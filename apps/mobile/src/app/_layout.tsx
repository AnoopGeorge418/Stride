import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';

import {
	useFonts,
	Lora_400Regular,
	Lora_700Bold,
	Lora_400Regular_Italic,
	Lora_700Bold_Italic,
} from '@expo-google-fonts/lora';
import {
	GeistMono_400Regular,
	GeistMono_700Bold,
	GeistMono_400Regular_Italic,
	GeistMono_700Bold_Italic,
} from '@expo-google-fonts/geist-mono';

import './global.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		// lora fonts
		Lora: Lora_400Regular,
		'Lora-Bold': Lora_700Bold,
		'Lora-Italic': Lora_400Regular_Italic,
		'Lora-BoldItalic': Lora_700Bold_Italic,

		// geist mono fonts
		GeistMono: GeistMono_400Regular,
		'GeistMono-Bold': GeistMono_700Bold,
		'GeistMono-Italic': GeistMono_400Regular_Italic,
		'GeistMono-BoldItalic': GeistMono_700Bold_Italic,
	});

	const [isMinTimeElapsed, setIsMinTimeElapsed] = useState(false);

	// Ensure at least 1 seconds display splash screen
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsMinTimeElapsed(true);
		}, 1000);
	}, []);

	// caching error in nav tree
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	// hide splash screen - only when fonts and splash screen loaded
	useEffect(() => {
		if (loaded && isMinTimeElapsed) {
			SplashScreen.hideAsync();
		}
	}, [loaded, !isMinTimeElapsed]);

	if (!loaded) {
		return null;
	}

    return (
        <SafeAreaProvider>
            <ThemeProvider>
     			<Stack
    				screenOptions={{
       					headerShown: false,
       					animation: 'ios_from_right',
       					animationDuration: 300,
       					animationMatchesGesture: true,
       					statusBarAnimation: 'fade',
       					statusBarHidden: true,
    				}}>
    				<Stack.Screen name="index" />
     			</Stack>
    		</ThemeProvider>
        </SafeAreaProvider>
	);
};

export default RootLayout;

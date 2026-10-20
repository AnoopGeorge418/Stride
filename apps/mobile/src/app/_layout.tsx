import { SplashScreen, Stack } from 'expo-router';

import {
	useFonts,
	Lora_400Regular,
	Lora_700Bold,
	Lora_400Regular_Italic,
	Lora_700Bold_Italic,
} from '@expo-google-fonts/lora';
import {
	GeistMono_300Light,
	GeistMono_400Regular,
	GeistMono_700Bold,
	GeistMono_400Regular_Italic,
	GeistMono_300Light_Italic,
	GeistMono_700Bold_Italic,
} from '@expo-google-fonts/geist-mono';

import { useEffect } from 'react';

import './global.css';

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

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return <Stack></Stack>;
};

export default RootLayout;

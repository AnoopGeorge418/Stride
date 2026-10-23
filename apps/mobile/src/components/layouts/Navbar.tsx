import { Text, View } from 'react-native';
import { Logo } from '../artificats/Logo';
import { Button } from '../artificats/Button';
import { Card } from '../artificats/Card';
import { useCustomTheme } from '@/contexts/ThemeContext';
import { Href } from 'expo-router';

type NavbarProps = { redirectionRoute?: Href; showSkip?: boolean };

export const Navbar = ({ redirectionRoute }: NavbarProps) => {
	const { theme } = useCustomTheme();

	return (
		<View className="flex flex-row justify-between items-center">
			{/*logo*/}
			<View className="flex flex-row justify-center items-center">
				<Logo />
			</View>

			{/*version & skip*/}
			<View className="flex flex-row justify-center items-center ">
                <Card style={{ backgroundColor: theme.surface.subtleBackground, padding: 4, paddingHorizontal: 10 }}>
                    <Text style={{ color: theme.typography.subtleText }}>V1.0</Text>
                </Card>
                <Button
                    content='SKIP'
                    redirectionRoute="/onboarding"
                    textColor={theme.typography.mutedText}
                    font='GeistMono'
                />
			</View>
		</View>
	);
};

import { View } from 'react-native';
import { Logo } from '../artificats/Logo';
import { Button } from '../artificats/Button';
import { Card } from '../artificats/Card';
import { useCustomTheme } from '@/contexts/ThemeContext';
import { Href } from 'expo-router';

type NavbarProps = { redirectionRoute?: Href; showSkip?: boolean };

export const Navbar = ({ redirectionRoute, showSkip = true }: NavbarProps) => {
	const { theme } = useCustomTheme();

	return (
		<View className="flex flex-row justify-between items-center">
			{/*logo*/}
			<View className="flex flex-row justify-center items-center">
				<Logo />
			</View>

			{/*version & skip*/}
			<View className="flex flex-row gap-2 justify-center items-center ">
				<Card
					content="V1.0"
					contentColor={theme.typography.subtleText}
					cardBackgroundColor={theme.interactive.secondaryBackground}
				/>
				{showSkip && (
					<Button
						content="Skip"
						redirectionRoute={redirectionRoute}
						textColor={theme.typography.mainHeading}
					/>
				)}
			</View>
		</View>
	);
};
    
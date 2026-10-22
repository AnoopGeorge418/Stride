// src/components/artificats/Card.tsx
import { useCustomTheme } from '@/contexts/ThemeContext';
import { CardProps } from '@/types/cardType';
import { Text, View } from 'react-native';

export const Card = ({ content, label, tone = 'default' }: CardProps) => {
	const { theme } = useCustomTheme();
	const borderColor =
		tone === 'accent'
			? theme.interactive.primaryBackground
			: theme.borders.default;

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				gap: 6,
				paddingVertical: 6,
				paddingHorizontal: 12,
				borderRadius: 100,
				borderWidth: 1,
				borderColor,
				backgroundColor: theme.surface.subtleBackground,
			}}>
			{label && (
				<Text
					style={{
						fontFamily: 'GeistMono',
						fontSize: 10,
						letterSpacing: 1.5,
						textTransform: 'uppercase',
						color: theme.typography.subtleText,
					}}>
					{label}
				</Text>
			)}
			<Text
				style={{
					fontFamily: 'GeistMono-Bold',
					fontSize: 12,
					color: theme.typography.mainHeading,
				}}>
				{content}
			</Text>
		</View>
	);
};

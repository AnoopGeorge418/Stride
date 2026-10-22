// src/components/artificats/corousalDots.tsx
import { useCustomTheme } from '@/contexts/ThemeContext';
import { CorousalProps } from '@/types/corousalType';
import { View } from 'react-native';

export const CorousalDots = ({ dotCounts, activeDotPage }: CorousalProps) => {
	const { theme } = useCustomTheme();

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 6,
			}}>
			{Array.from({ length: dotCounts }, (_, i) => {
				const active = i === activeDotPage;
				return (
					<View
						key={i}
						style={{
							width: active ? 18 : 6,
							height: 6,
							borderRadius: 3,
							backgroundColor: active
								? theme.typography.mainHeading
								: theme.borders.default,
						}}
					/>
				);
			})}
		</View>
	);
};

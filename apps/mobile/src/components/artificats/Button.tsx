import { ButtonProps } from '@/types/buttonType';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const Button = ({
	content,
	redirectionRoute,
	width,
	borderRadius,
	backgroundColor,
	textColor,
	height,
	icon,
}: ButtonProps) => {
	const router = useRouter();

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={{
				width,
				height,
				borderRadius,
				backgroundColor,
				paddingHorizontal: 16,
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onPress={() => {
				if (redirectionRoute) router.push(redirectionRoute);
			}}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 8,
				}}>
				<Text
					style={{
						fontFamily: 'Lora-Bold',
						fontSize: 14,
						lineHeight: 18,
						letterSpacing: 2,
						textTransform: 'uppercase',
						color: textColor,
						includeFontPadding: false,
						textAlignVertical: 'center',
					}}>
					{content}
				</Text>
				{icon && (
					<Image
						source={icon}
						style={{ width: 16, height: 16, resizeMode: 'contain' }}
					/>
				)}
			</View>
		</TouchableOpacity>
	);
};

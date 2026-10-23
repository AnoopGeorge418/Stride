import { ButtonProps } from '@/types/buttonType';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';

export const Button = ({
	content,
	redirectionRoute,
	width,
	borderRadius,
	backgroundColor,
	textColor,
	height,
    icon,
	font = "Lora"
}: ButtonProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handlePress = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 300); 
        if (redirectionRoute) {
            router.push(redirectionRoute);
        }
    }

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={{ width, height, borderRadius, backgroundColor, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}
            onPress={handlePress}
            disabled={isLoading}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                {isLoading ? (
                    <ActivityIndicator color={textColor} size="small" className='animate-spin' />
                ) : (
                    <>
                        <Text style={{ fontFamily: font, fontSize: 14, color: textColor, textTransform: "uppercase", fontWeight: "bold" }}>
                            {content}
                        </Text>
                        {icon && (
                            <Image
                                source={icon}
                                style={{ width: 16, height: 16, resizeMode: 'contain' }}
                            />
                        )}
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};
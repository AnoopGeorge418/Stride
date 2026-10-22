import { ButtonProps } from "@/types/buttonType"
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native"

export const Button = ({
    content,
    redirectionRoute,
    width,
    borderRadius,
    backgroundColor,
    textColor,
    height,
    icon
}: ButtonProps) => {

    const router = useRouter();
        
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: width, borderRadius: borderRadius, backgroundColor: backgroundColor, height: height, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}
            onPress={() => {
                if (redirectionRoute) router.push(redirectionRoute);
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={{ fontFamily: "Lora-Bold", color: textColor, letterSpacing: 2, includeFontPadding: false, textTransform: "uppercase", textAlignVertical: "center", lineHeight: 20, marginEnd: -2 }}>
                    { content }
                </Text>
                {icon && (
                    <Image 
                        source={icon} 
                        style={{ width: 32, height: 32, resizeMode: 'contain' }} 
                    />
                )}
           	</View>
        </TouchableOpacity>
    )
}

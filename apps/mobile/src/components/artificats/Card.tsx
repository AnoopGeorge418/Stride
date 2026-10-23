import { CardProps } from "@/types/cardType"
import { View, StyleSheet } from "react-native"

export const Card = ({ children, backgroundColor, style }: CardProps) => {
    
    return (
        <View style={[ styles.shell, { backgroundColor: backgroundColor }, style ]} >
			{children}
		</View>
    )
}

const styles = StyleSheet.create({
	shell: {
		borderRadius: 16,
		padding: 14,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'rgba(0,0,0,0.08)',
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 4 },
		elevation: 3, // Android shadow
	},
});

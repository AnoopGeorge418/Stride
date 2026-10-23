import { Text, View } from 'react-native';
import { Card } from '@/components/artificats/Card';
import { useCustomTheme } from '@/contexts/ThemeContext';

export const MomentumCard = () => {

    const { theme } = useCustomTheme();

	return (
		<Card style={{ width: "auto", flexDirection: "row", gap: 5, padding: 4, paddingHorizontal: 9, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "column", gap: 2 }}>
                <Text style={{ fontFamily: "GeistMono-Bold", color: theme.typography.subtleText, textTransform: "uppercase", letterSpacing: 2 }}>
                    🚀 MOMENTUM
                </Text>
                <Text style={{ fontFamily: "GeistMono-Bold", fontSize: 18, color: theme.typography.mainHeading }}>
                    +34% this week
                </Text>
			</View>
		</Card>
	);
};

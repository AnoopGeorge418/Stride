import { Text, View } from 'react-native';
import { Card } from '@/components/artificats/Card';
import { useCustomTheme } from '@/contexts/ThemeContext';

export const FlowScoreCard = () => {

    const { theme } = useCustomTheme();

	return (
		<Card style={{ width: "auto", flexDirection: "row", gap: 5, padding: 4, paddingHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
            <View style={{  }}>
                <View>
                    <View style={{ borderRadius: 100, width: 30, height: 30, borderWidth: 2, borderColor: theme.borders.default }} />
                    <Text style={{ position: "absolute", marginTop: 6, marginLeft: 5, fontFamily: "GeistMono", fontSize: 14, color: theme.typography.subtleText }}>98%</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column", gap: 2 }}>
                <Text style={{ fontFamily: "GeistMono-Bold", color: theme.typography.subtleText, textTransform: "uppercase", letterSpacing: 2 }}>
                    Flow Score
                </Text>
                <View style={{ flexDirection: "row", gap: 14, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "GeistMono-Bold", color: theme.typography.mainHeading }}>
                        98.4
                    </Text>
                    <Text style={{ fontFamily: "GeistMono-Bold", color: theme.status.successText, backgroundColor: theme.status.successBackground, padding: 2, paddingHorizontal: 10,  borderRadius: 6 }}>
                        Peak
                    </Text>
                </View>
			</View>
		</Card>
	);
};

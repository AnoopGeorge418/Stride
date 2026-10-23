import { useCustomTheme } from "@/contexts/ThemeContext";
import { View, Text } from "react-native";
import { Card } from "../Card";

export const AiInsightCard = () => {
    const { theme } = useCustomTheme();

    return (
        <Card style={{ width: "auto", flexDirection: "row", padding: 4, paddingHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "GeistMono", color: theme.typography.subtleText }}>
                    ✨ AI Insight: 
                    <Text> </Text>
                    <Text style={{ fontFamily: "GeistMono-Bold", color: theme.typography.mainHeading }}>2 tasks</Text>
                    <Text> </Text>
                    in peak flow
                </Text>
            </View>
        </Card>
    )
}
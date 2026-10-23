import { useCustomTheme } from "@/contexts/ThemeContext";
import { View, Text } from "react-native";
import { Card } from "../Card";

export const InfoCard = () => {
    const { theme } = useCustomTheme();

    return (
        <Card style={{ width: "auto", flexDirection: "row", padding: 4, paddingHorizontal: 8, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Text style={{ fontFamily: "GeistMono", color: theme.typography.subtleText }}>
                    ⚡ 2.4x Focus Depth
                </Text>
                <Text style={{ fontFamily: "GeistMono", color: theme.typography.subtleText }}>
                    🔥 94% Consistency
                </Text>
                <Text style={{ fontFamily: "GeistMono", color: theme.typography.subtleText }}>
                    ⏱️ 45m Saved/day
                </Text>
            </View>
        </Card>
    )
}
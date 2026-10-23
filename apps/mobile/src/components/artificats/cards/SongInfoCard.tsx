import { useCustomTheme } from "@/contexts/ThemeContext";
import { View, Text } from "react-native";
import { Card } from "../Card";

export const SongInfoCard = () => {
    const { theme } = useCustomTheme();

    return (
        <Card style={{ width: "auto", flexDirection: "row", padding: 4, paddingHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "GeistMono", color: theme.typography.subtleText }}>
                    🎧 40Hz Deep Work Flow 
                    <Text> </Text>
                    <Text style={{ fontFamily: "GeistMono-Bold", color: theme.status.successBackground }}>(Active)</Text>
                </Text>
            </View>
        </Card>
    )
}

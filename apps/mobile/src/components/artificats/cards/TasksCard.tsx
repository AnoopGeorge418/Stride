import { useCustomTheme } from "@/contexts/ThemeContext";
import { View, Text } from "react-native";
import { Card } from "../Card";

export const TasksCard = () => {
    const { theme } = useCustomTheme();

    return (
        <Card style={{ width: "100%", flexDirection: "column", padding: 10, paddingHorizontal: 20, gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 140, justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontFamily: "Lora-Bold", color: theme.typography.mainHeading }}>AI TASK COPILOT</Text>
                <Text style={{ fontFamily: "GeistMono-Bold", color: theme.status.infoBackground, backgroundColor: theme.interactive.primaryBackground, borderRadius: 10, paddingHorizontal: 10, textTransform: "uppercase", padding: 1 }}>
                    Auto-Expand
                </Text>
            </View>
            <View style={{ width: "full", height: 1, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 100 }} />
            {/*content*/}
            <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <View style={{ width: 15, height: 15, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 5 }} />
                    <Text style={{ fontFamily: "Lora-Bold", fontSize: 18, color: theme.typography.mainHeading }}>Prepare Q3 Product Review</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 8 , marginTop: 10, backgroundColor: theme.surface.subtleBackground, borderRadius: 10, padding: 6}}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <View style={{ width: 5, height: 5, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 100, backgroundColor: theme.surface.subtleBackground }} />
                        <Text style={{ color: theme.typography.subtleText, fontFamily: "GeistMono" }}>Analyze team velocity & OKRs</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <View style={{ width: 5, height: 5, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 100, backgroundColor: theme.surface.subtleBackground }} />
                        <Text style={{ color: theme.typography.subtleText, fontFamily: "GeistMono" }}>Draft executive summary & slides</Text>
                    </View>
                </View>
            </View>
        </Card>
    )
}

import { useCustomTheme } from "@/contexts/ThemeContext";
import { View, Text } from "react-native";
import { Card } from "../Card";

export const RitualsCard = () => {
    const { theme } = useCustomTheme();

    return (
        <Card style={{ width: "100%", flexDirection: "column", padding: 10, paddingHorizontal: 20, gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 140, justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontFamily: "Lora-Bold", color: theme.typography.mainHeading }}>DAILY RITUALS</Text>
                <Text style={{ fontFamily: "GeistMono-Bold", color: theme.status.warningText, backgroundColor: theme.status.warningBackground, borderRadius: 10, paddingHorizontal: 10, textTransform: "uppercase", padding: 1 }}>
                    🔥 21d streak
                </Text>
            </View>
            <View style={{ width: "full", height: 1, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 100 }} />
            {/*content*/}
            <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <View style={{ width: 15, height: 15, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 5 }}>
                        <Text style={{ position: "absolute", marginLeft: 2, marginTop: -2}}>
                            ✓
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 40, alignItems: "center"}}>
                        <Text style={{ fontFamily: "Lora-Bold", fontSize: 18, color: theme.typography.mainHeading }}>
                            Morning Sunlight & Hydration
                        </Text>
                        <Text style={{
                            fontFamily: "GeistMono-Bold", color: theme.status.successText, backgroundColor: theme.status.successBackground, padding: 2, borderRadius: 5, paddingHorizontal: 10 }}>
                            COMPLETE
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", gap: 8 , marginTop: 10, padding: 6}}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <View style={{ width: 15, height: 15, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 5 }} />
                        <View style={{ flexDirection: "row", gap: 80, alignItems: "center"}}>
                            <Text style={{ color: theme.typography.subtleText, fontFamily: "GeistMono" }}>
                                45m Deep Focus Session
                            </Text>
                            <Text style={{
                                fontFamily: "GeistMono-Bold", color: theme.status.infoText, backgroundColor: theme.status.infoBackground, padding: 2, borderRadius: 5, paddingHorizontal: 10 }}>
                                In Progress
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <View style={{ width: 15, height: 15, borderWidth: 1, borderColor: theme.borders.default, borderRadius: 5 }} />
                        <View style={{ flexDirection: "row", gap: 80, alignItems: "center"}}>
                            <Text style={{ color: theme.typography.subtleText, fontFamily: "GeistMono" }}>
                                Evening Digital Sunset
                            </Text>
                            <Text style={{
                                fontFamily: "GeistMono-Bold", color: theme.typography.subtleText, backgroundColor: theme.surface.subtleBackground, padding: 2, borderRadius: 5, paddingHorizontal: 10 }}>
                                Not Started
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Card>
    )
}

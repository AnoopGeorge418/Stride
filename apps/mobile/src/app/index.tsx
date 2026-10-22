import { Navbar } from '@/components/layouts/Navbar';
import { Text, View } from 'react-native';
import { useCustomTheme } from "@/contexts/ThemeContext"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/artificats/Button';
import { Footer } from '@/components/layouts/Footer';
import { Card } from '@/components/artificats/Card';
import pixelArrowBlack from "@assets/icons/pixelArrowBlack.png"
import pixelArrowWhite from "@assets/icons/pixelArrowWhite.png"

const Index = () => {
    const { theme, themeMode } = useCustomTheme();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.surface.appBackground }}>
            <View style={{ flex: 1, marginLeft: 20, marginRight: 20, justifyContent: 'space-between', flexDirection: 'column', paddingBottom: 20}}>
                {/* Navbar  */}
                <View style={{ position: "fixed", top: 0 }}>
                    <Navbar />
                </View>
                {/* Card */}
                <View style={{ gap: 10 }}>
                    <Card content="something working on It" />
                    <Card content="something working on It" />
                </View>
                {/* Content */}
                <View style={{ flexDirection: "column", gap: 32, marginBottom: 24 }}>
                    <View  style={{ justifyContent: "center", alignItems: "center", gap: 12 }}>
                        <Text style={{ fontFamily: "Lora", fontSize: 36, textAlign: "center" }}>Your productivity, at hand</Text>
                        <Text style={{ fontFamily: "Lora", width: "90%", textAlign: "center", fontSize: 18, color: theme.typography.subtleText, lineHeight: 29, letterSpacing: 1 }}>Harness AI-driven habit formation, intuitive task tracking, and seamless daily execution built for clear momentum.</Text>
                    </View>
                    <Button
                        content='Get Started'
                        width="full"
                        height={50}
                        borderRadius={14}
                        textColor={theme.typography.inverseText}
                        backgroundColor={theme.surface.buttonBackground}
                        icon={ themeMode === "dark" ?  pixelArrowBlack : pixelArrowWhite }
                    />
                </View>
                {/* Footer */}
                <View style={{ position: "fixed", bottom: 32}}>
                    <Footer />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Index;


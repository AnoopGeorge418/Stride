import { Button } from '@/components/artificats/Button';
import { FlowScoreCard } from '@/components/artificats/cards/FlowScoreCard';
import { CorousalDots } from '@/components/artificats/corousalDots';
import { GridBackground } from '@/components/artificats/GridBackground';
import { Footer } from '@/components/layouts/Footer';
import { Navbar } from '@/components/layouts/Navbar';
import { useCustomTheme } from '@/contexts/ThemeContext';
import pixelArrowBlack from '@assets/icons/pixelArrowBlack.png';
import pixelArrowWhite from '@assets/icons/pixelArrowWhite.png';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FloatingView } from '@/components/artificats/FloatingView';
import { AiInsightCard } from '@/components/artificats/cards/AiInsightCard';
import { SongInfoCard } from '@/components/artificats/cards/SongInfoCard';
import { MomentumCard } from '@/components/artificats/cards/MomentumCard';
import { InfoCard } from '@/components/artificats/cards/InfoCard';
import { RitualsCard } from '@/components/artificats/cards/RitualsCard';
import { TasksCard } from '@/components/artificats/cards/TasksCard';

const Index = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.surface.appBackground }}>
            <GridBackground variant="dots" spacing={24} opacity={0.5}>
    			<View style={{ flex: 1, marginHorizontal: 20, paddingBottom: 20, marginTop: 15 }}>
                    <Navbar />
                    {/*cards*/}
                    <View style={{ flex: 1, paddingTop: 24, justifyContent: "center" }}>
                        {/*top cards*/}
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <FloatingView amplitude={10} duration={2400}>
            					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '-4deg' }] }}>
                                   <FlowScoreCard />
                                </View>
                            </FloatingView>
                            <FloatingView amplitude={10} duration={2400}>
            					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '4deg' }] }}>
                                   <AiInsightCard />
                                </View>
                            </FloatingView>
                        </View>
                        {/*center cards*/}
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
           					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '-4deg' }] }}>
                                <TasksCard />
                            </View>
           					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '4deg' }] }}>
                                <RitualsCard />
                            </View>
                        </View>
                        {/*bottom cards*/}
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <FloatingView amplitude={10} duration={2400}>
            					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '8deg' }] }}>
                                   <SongInfoCard />
                                </View>
                            </FloatingView>
                            <FloatingView amplitude={10} duration={2400}>
            					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '-8deg' }] }}>
                                   <MomentumCard />
                                </View>
                            </FloatingView>
                        </View>
                        {/*last card*/}
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                            <FloatingView amplitude={10} duration={2400}>
            					<View style={{ backgroundColor: theme.surface.cardBackground, borderRadius: 10, transform: [{ rotate: '0deg' }] }}>
                                   <InfoCard />
                                </View>
                            </FloatingView>
                        </View>
    				</View>
    
    				{/* Hero + button grouped, sitting right above the footer */}
    				<View style={{ gap: 32, marginBottom: 24 }}>
    					<View style={{ alignItems: 'center', gap: 12 }}>
    						<Text style={{ fontFamily: 'Lora', fontSize: 36, textAlign: 'center', color: theme.typography.mainHeading }}>
    							Your productivity, at hand
    						</Text>
    						<Text style={{ fontFamily: 'Lora', width: '90%', textAlign: 'center', fontSize: 18, lineHeight: 29, letterSpacing: 1, color: theme.typography.subtleText }}>
    							Harness AI-driven habit formation, intuitive task
    							tracking, and seamless daily execution built for
    							clear momentum.
    						</Text>
    					</View>
    
    					<CorousalDots dotCounts={3} activeDotPage={0} />
    
    					<Button
    						content="Get Started"
    						width="100%"
    						height={50}
    						borderRadius={14}
    						textColor={theme.typography.inverseText}
    						backgroundColor={theme.surface.buttonBackground}
                            icon={themeMode === 'dark' ? pixelArrowBlack : pixelArrowWhite}
                            redirectionRoute="/onboarding"
                            font='GeistMono-Bold'
    					/>
    				</View>
    
    				{/* Footer pinned to the bottom */}
    				<Footer />
                </View>
            </GridBackground>
		</SafeAreaView>
	);
};

export default Index;

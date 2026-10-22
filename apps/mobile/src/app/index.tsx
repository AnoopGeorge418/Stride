// src/app/index.tsx
import { Button } from '@/components/artificats/Button';
import { Card } from '@/components/artificats/Card';
import { CorousalDots } from '@/components/artificats/corousalDots';
import { GridBackground } from '@/components/artificats/GridBackground';
import { Footer } from '@/components/layouts/Footer';
import { Navbar } from '@/components/layouts/Navbar';
import { useCustomTheme } from '@/contexts/ThemeContext';
import pixelArrowBlack from '@assets/icons/pixelArrowBlack.png';
import pixelArrowWhite from '@assets/icons/pixelArrowWhite.png';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Data drives the cards. Add or remove entries here, not in JSX.
const HERO_CARDS: {
	label?: string;
	content: string;
	tone?: 'default' | 'accent';
}[] = [
	{ label: 'Flow score', content: '98.4 Peak', tone: 'accent' },
	{ label: 'Momentum', content: '+34% this week' },
	{ label: 'Focus', content: '2.4x depth' },
	{ label: 'Consistency', content: '94%' },
];

const Index = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.surface.appBackground }}>
            <GridBackground variant="lines" spacing={24} opacity={0.5}>
    			<View style={{ flex: 1, marginHorizontal: 20, paddingBottom: 20 }}>
    				<Navbar />
    				{/* Cards take the free space and sit at the top of it */}
    				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 24 }}>
    					<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center', }}>
    						{HERO_CARDS.map((c) => (
    							<Card
    								key={c.content}
    								label={c.label}
    								content={c.content}
    								tone={c.tone}
    							/>
    						))}
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
    
    					<CorousalDots dotCounts={4} activeDotPage={0} />
    
    					<Button
    						content="Get Started"
    						width="100%"
    						height={50}
    						borderRadius={14}
    						textColor={theme.typography.inverseText}
    						backgroundColor={theme.surface.buttonBackground}
    						icon={ themeMode === 'dark' ? pixelArrowBlack : pixelArrowWhite }
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

import { Button } from '@/components/artificats/Button';
import { Card } from '@/components/artificats/Card';
import { CorousalDots } from '@/components/artificats/corousalDots';
import { GridBackground } from '@/components/artificats/GridBackground';
import { Footer } from '@/components/layouts/Footer';
import { Navbar } from '@/components/layouts/Navbar';
import { useCustomTheme } from '@/contexts/ThemeContext';
import pixelArrowBlack from '@assets/icons/pixelArrowBlack.png';
import pixelArrowWhite from '@assets/icons/pixelArrowWhite.png';
import { useEffect, type ReactNode } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withRepeat,
	withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export type TaskItem = {
	id: string;
	text: string;
	completed?: boolean;
	inProgress?: boolean;
	progressText?: string;
	subItems?: string[];
};

type FloatingCardProps = {
	children: ReactNode;
	rotate: `${number}deg`;
	style?: StyleProp<ViewStyle>;
	amplitude?: number; // how far (px) the card drifts up and down
	duration?: number; // one-way time in ms
	delay?: number; // start offset in ms so cards don't move in sync
};

// Wraps any positioned card with a looping vertical float + static tilt
const FloatingCard = ({
	children,
	rotate,
	style,
	amplitude = 6,
	duration = 3000,
	delay = 0,
}: FloatingCardProps) => {
	const offsetY = useSharedValue(0);

	useEffect(() => {
		offsetY.value = withDelay(
			delay,
			withRepeat(
				withTiming(-amplitude, {
					duration,
					easing: Easing.inOut(Easing.sin),
				}),
				-1, // loop forever
				true, // reverse each cycle so it floats back and forth
			),
		);
	}, [amplitude, duration, delay, offsetY]);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: offsetY.value }, { rotate }],
	}));

	return (
		<Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
	);
};

const Index = () => {
	const { theme, themeMode } = useCustomTheme();

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: theme.surface.appBackground }}>
			<GridBackground variant="lines" spacing={24} opacity={0.5}>
				<View
					style={{
						flex: 1,
						marginHorizontal: 20,
						paddingBottom: 20,
					}}>
					<Navbar redirectionRoute="/onboarding" showSkip={true} />

					{/* Card stack: centered between Navbar and Hero */}
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<View
							style={{
								width: '100%',
								height: 340,
								position: 'relative',
							}}>
							{/* Top-Left Flow Score Mini Card */}
							<FloatingCard
								rotate="-6deg"
								amplitude={5}
								duration={2600}
								delay={0}
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									zIndex: 3,
								}}>
								<Card
									icon="🔘"
									title="FLOW SCORE"
									content="98.4 Peak"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.subtleText}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 8,
										paddingHorizontal: 12,
									}}
								/>
							</FloatingCard>

							{/* Top-Right AI Insight Mini Card */}
							<FloatingCard
								rotate="5deg"
								amplitude={6}
								duration={3100}
								delay={400}
								style={{
									position: 'absolute',
									top: 4,
									right: 0,
									zIndex: 3,
								}}>
								<Card
									content="✨ AI Insight: 2 tasks in peak flow"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 8,
										paddingHorizontal: 12,
									}}
								/>
							</FloatingCard>

							{/* Main Top Card: AI Task Copilot */}
							<FloatingCard
								rotate="-3deg"
								amplitude={8}
								duration={3400}
								delay={150}
								style={{
									position: 'absolute',
									top: 70,
									width: '100%',
									alignItems: 'center',
									zIndex: 2,
								}}>
								<Card
									variant="task-copilot"
									title="AI TASK COPILOT"
									tag="AUTO-EXPAND"
									content="Prepare Q3 Product Review"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.subtleText}
									contentColor={theme.typography.subtleText}
									tagBackgroundColor="#f3e8ff"
									tagColor="#9333ea"
									tasks={[
										{
											id: '1',
											text: '',
											subItems: [
												'Analyze team velocity & OKRs',
												'Draft executive summary & slides',
											],
										},
									]}
								/>
							</FloatingCard>

							{/* Overlapping Middle Card: Daily Rituals */}
							<FloatingCard
								rotate="2.5deg"
								amplitude={6}
								duration={2800}
								delay={600}
								style={{
									position: 'absolute',
									top: 190,
									width: '100%',
									alignItems: 'center',
									zIndex: 4,
								}}>
								<Card
									variant="daily-rituals"
									title="DAILY RITUALS"
									tag="🔥 21d streak"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.mainHeading}
									contentColor={theme.typography.mainHeading}
									tagBackgroundColor="#fef3c7"
									tagColor="#d97706"
									tasks={[
										{
											id: '1',
											text: 'Morning Sunlight & Hydrati...',
											completed: true,
										},
										{
											id: '2',
											text: '45m Deep Focus Sessi...',
											inProgress: true,
											progressText: '32/45m',
										},
										{
											id: '3',
											text: 'Evening Digital Suns...',
											completed: false,
										},
									]}
								/>
							</FloatingCard>

							{/* Bottom Floating Pills: hang over the top of the hero heading */}
							<FloatingCard
								rotate="-4deg"
								amplitude={4}
								duration={2400}
								delay={300}
								style={{
									position: 'absolute',
									bottom: -10,
									left: 0,
									zIndex: 5,
								}}>
								<Card
									content="🎧 40Hz Deep Work Flow (Active)"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor="#10b981"
									style={{
										paddingVertical: 8,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>

							<FloatingCard
								rotate="4deg"
								amplitude={4}
								duration={2700}
								delay={500}
								style={{
									position: 'absolute',
									bottom: -10,
									right: 0,
									zIndex: 5,
								}}>
								<Card
									title="MOMENTUM"
									content="+34% this week"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.subtleText}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 8,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>

							{/* Last card, centered: focus stats strip */}
							<FloatingCard
								rotate="-1deg"
								amplitude={3}
								duration={3000}
								delay={700}
								style={{
									position: 'absolute',
									bottom: -68,
									width: '100%',
									alignItems: 'center',
									zIndex: 6,
								}}>
								<Card
									content="⚡ 2.4x Focus Depth  •  🔥 94% Consistency  •  ⏱️ 45m Saved/day"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor={theme.typography.subtleText}
									style={{
										paddingVertical: 6,
										paddingHorizontal: 12,
									}}
								/>
							</FloatingCard>
						</View>
					</View>

					{/* Hero + button grouped */}
					<View style={{ gap: 24, marginBottom: 16, marginTop: 24 }}>
						<View style={{ alignItems: 'center', gap: 12 }}>
							<Text
								style={{
									fontFamily: 'Lora',
									fontSize: 34,
									textAlign: 'center',
									color: theme.typography.mainHeading,
								}}>
								Your productivity, at hand
							</Text>
							<Text
								style={{
									fontFamily: 'Lora',
									width: '90%',
									textAlign: 'center',
									fontSize: 16,
									lineHeight: 26,
									letterSpacing: 0.5,
									color: theme.typography.subtleText,
								}}>
								Harness AI-driven habit formation, intuitive
								task tracking, and seamless daily execution
								built for clear momentum.
							</Text>
						</View>

						<CorousalDots dotCounts={3} activeDotPage={0} />

						<Button
							redirectionRoute="/onboarding"
							content="Get Started"
							width="100%"
							height={50}
							borderRadius={14}
							textColor={theme.typography.inverseText}
							backgroundColor={theme.surface.buttonBackground}
							icon={
								themeMode === 'dark'
									? pixelArrowBlack
									: pixelArrowWhite
							}
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

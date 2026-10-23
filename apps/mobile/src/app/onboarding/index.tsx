// src/app/onboarding/index.tsx
import { Button } from '@/components/artificats/Button';
import { Card } from '@/components/artificats/Card';
import { CorousalDots } from '@/components/artificats/corousalDots';
import { GridBackground } from '@/components/artificats/GridBackground';
import { Navbar } from '@/components/layouts/Navbar';
import { Footer } from '@/components/layouts/Footer';
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

type FloatingCardProps = {
	children: ReactNode;
	rotate: `${number}deg`;
	style?: StyleProp<ViewStyle>;
	amplitude?: number;
	duration?: number;
	delay?: number;
};

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
				-1,
				true,
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

const OnboardingPage = () => {
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
					<Navbar redirectionRoute="/auth" showSkip={true} />

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
								height: 380,
								position: 'relative',
							}}>
							{/* Top Card: AI Copilot & Research */}
							<FloatingCard
								rotate="-2deg"
								amplitude={6}
								duration={3200}
								delay={0}
								style={{
									position: 'absolute',
									top: 0,
									width: '100%',
									alignItems: 'center',
									zIndex: 2,
								}}>
								<Card
									variant="task-copilot"
									icon="✨"
									title="AI COPILOT & RESEARCH"
									tag="INSTANT OUTLINE"
									content="Decomposed: Refactor Auth Pipeline"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.subtleText}
									contentColor={theme.typography.mainHeading}
									tagBackgroundColor="#1e1b4b"
									tagColor="#818cf8"
									tasks={[
										{
											id: '1',
											text: '',
											subItems: [
												'1. Token Rotations',
												'2. Session Store',
												'+2 more',
											],
										},
									]}
								/>
							</FloatingCard>

							{/* Middle Card: Intelligent Tasks & Rituals */}
							<FloatingCard
								rotate="1.5deg"
								amplitude={5}
								duration={2900}
								delay={300}
								style={{
									position: 'absolute',
									top: 115,
									width: '100%',
									alignItems: 'center',
									zIndex: 3,
								}}>
								<Card
									variant="daily-rituals"
									title="INTELLIGENT TASKS & RITUALS"
									tag="🔥 32d streak"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.mainHeading}
									contentColor={theme.typography.mainHeading}
									tagBackgroundColor="#451a03"
									tagColor="#fbbf24"
									tasks={[
										{
											id: '1',
											text: 'Architecture Blueprint Review',
											completed: true,
										},
										{
											id: '2',
											text: 'Deep Focus: API Schema',
											inProgress: true,
											progressText: 'IN FLOW',
										},
									]}
								/>
							</FloatingCard>

							{/* Rhythm Heatmap Card */}
							<FloatingCard
								rotate="-1deg"
								amplitude={4}
								duration={3500}
								delay={600}
								style={{
									position: 'absolute',
									top: 235,
									width: '100%',
									alignItems: 'center',
									zIndex: 4,
								}}>
								<View
									style={{
										backgroundColor:
											theme.surface.subtleBackground,
										borderRadius: 16,
										borderWidth: 1,
										borderColor: '#262626',
										padding: 12,
										width: '100%',
										gap: 8,
									}}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
										<Text
											style={{
												fontFamily: 'GeistMono',
												fontSize: 11,
												color: theme.typography
													.subtleText,
											}}>
											📅 RHYTHM HEATMAP
										</Text>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												gap: 6,
											}}>
											<View
												style={{
													backgroundColor: '#451a03',
													paddingHorizontal: 6,
													paddingVertical: 2,
													borderRadius: 6,
												}}>
												<Text
													style={{
														fontFamily: 'GeistMono',
														fontSize: 10,
														color: '#fbbf24',
													}}>
													🔥 32d streak
												</Text>
											</View>
											<Text
												style={{
													fontFamily: 'GeistMono',
													fontSize: 11,
													color: '#4ade80',
												}}>
												94.8% Rhythm
											</Text>
										</View>
									</View>

									{/* Simulated Grid dots */}
									<View
										style={{
											paddingVertical: 4,
											alignItems: 'center',
											gap: 4,
										}}>
										{[...Array(4)].map((_, rIdx) => (
											<View
												key={rIdx}
												style={{
													flexDirection: 'row',
													gap: 6,
												}}>
												{[...Array(14)].map(
													(_, cIdx) => {
														const isActive =
															(rIdx + cIdx) %
																3 !==
															0;
														return (
															<View
																key={cIdx}
																style={{
																	width: 6,
																	height: 6,
																	borderRadius: 2,
																	backgroundColor:
																		isActive
																			? '#10b981'
																			: '#1f2937',
																}}
															/>
														);
													},
												)}
											</View>
										))}
									</View>

									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
										<Text
											style={{
												fontFamily: 'GeistMono',
												fontSize: 10,
												color: '#6b7280',
											}}>
											Last 90 days
										</Text>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												gap: 4,
											}}>
											<Text
												style={{
													fontFamily: 'GeistMono',
													fontSize: 10,
													color: '#6b7280',
												}}>
												Less
											</Text>
											<View
												style={{
													width: 6,
													height: 6,
													borderRadius: 2,
													backgroundColor: '#1f2937',
												}}
											/>
											<View
												style={{
													width: 6,
													height: 6,
													borderRadius: 2,
													backgroundColor: '#065f46',
												}}
											/>
											<View
												style={{
													width: 6,
													height: 6,
													borderRadius: 2,
													backgroundColor: '#059669',
												}}
											/>
											<View
												style={{
													width: 6,
													height: 6,
													borderRadius: 2,
													backgroundColor: '#10b981',
												}}
											/>
											<Text
												style={{
													fontFamily: 'GeistMono',
													fontSize: 10,
													color: '#6b7280',
												}}>
												More
											</Text>
										</View>
									</View>
								</View>
							</FloatingCard>

							{/* Bottom Floating Pills */}
							<FloatingCard
								rotate="2deg"
								amplitude={3}
								duration={2500}
								delay={200}
								style={{
									position: 'absolute',
									bottom: -12,
									left: 0,
									zIndex: 5,
								}}>
								<Card
									content="⚡ Offline First"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 6,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>

							<FloatingCard
								rotate="-2deg"
								amplitude={3}
								duration={2700}
								delay={400}
								style={{
									position: 'absolute',
									bottom: -12,
									right: 0,
									zIndex: 5,
								}}>
								<Card
									content="📊 Export JSON/CSV"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 6,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>

							<FloatingCard
								rotate="1deg"
								amplitude={3}
								duration={3000}
								delay={500}
								style={{
									position: 'absolute',
									bottom: -58,
									left: 24,
									zIndex: 6,
								}}>
								<Card
									content="🎧 Lo-Fi & 40Hz Audio"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 6,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>

							<FloatingCard
								rotate="-1deg"
								amplitude={3}
								duration={2800}
								delay={700}
								style={{
									position: 'absolute',
									bottom: -58,
									right: 24,
									zIndex: 6,
								}}>
								<Card
									content="📈 Flow Analytics"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor={theme.typography.mainHeading}
									style={{
										paddingVertical: 6,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>
						</View>
					</View>

					{/* Hero + button grouped */}
					<View style={{ gap: 20, marginBottom: 16, marginTop: 36 }}>
						<View style={{ alignItems: 'center', gap: 10 }}>
							<Text
								style={{
									fontFamily: 'Lora',
									fontSize: 32,
									textAlign: 'center',
									color: theme.typography.mainHeading,
								}}>
								Built for depth, designed for flow.
							</Text>
							<Text
								style={{
									fontFamily: 'Lora',
									width: '92%',
									textAlign: 'center',
									fontSize: 15,
									lineHeight: 24,
									letterSpacing: 0.3,
									color: theme.typography.subtleText,
								}}>
								Smart task orchestration, AI-assisted synthesis,
								habit heatmaps, and offline tools in one calm
								workspace.
							</Text>
						</View>

						<CorousalDots dotCounts={3} activeDotPage={1} />

						<Button
							redirectionRoute="/auth/"
							content="CONTINUE"
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

					<Footer />
				</View>
			</GridBackground>
		</SafeAreaView>
	);
};

export default OnboardingPage;

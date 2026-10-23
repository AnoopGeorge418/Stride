import { Button } from '@/components/artificats/Button';
import { Card } from '@/components/artificats/Card';
import { CorousalDots } from '@/components/artificats/corousalDots';
import { GridBackground } from '@/components/artificats/GridBackground';
import { Navbar } from '@/components/layouts/Navbar';
import { Footer } from '@/components/layouts/Footer';
import { useCustomTheme } from '@/contexts/ThemeContext';
import { useEffect, type ReactNode } from 'react';
import {
	StyleProp,
	Text,
	View,
	ViewStyle,
	TouchableOpacity,
} from 'react-native';
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

const AuthSelectionPage = () => {
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
					<Navbar showSkip={false} />

					{/* Card stack area */}
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<View
							style={{
								width: '100%',
								height: 310,
								position: 'relative',
							}}>
							{/* Top Card: Secure Vault & Sync */}
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
								<View
									style={{
										backgroundColor:
											theme.surface.subtleBackground,
										borderRadius: 16,
										borderWidth: 1,
										borderColor: '#262626',
										padding: 16,
										width: '100%',
										gap: 12,
									}}>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'center',
												gap: 6,
											}}>
											<View
												style={{
													width: 6,
													height: 6,
													borderRadius: 3,
													backgroundColor: '#10b981',
												}}
											/>
											<Text
												style={{
													fontFamily:
														'GeistMono-Bold',
													fontSize: 11,
													color: theme.typography
														.subtleText,
													letterSpacing: 1,
												}}>
												SECURE VAULT & SYNC
											</Text>
										</View>
										<View
											style={{
												flexDirection: 'row',
												gap: 6,
											}}>
											<View
												style={{
													backgroundColor: '#065f46',
													paddingHorizontal: 6,
													paddingVertical: 2,
													borderRadius: 4,
												}}>
												<Text
													style={{
														fontFamily:
															'GeistMono-Bold',
														fontSize: 9,
														color: '#34d399',
													}}>
													VAULT READY
												</Text>
											</View>
											<View
												style={{
													backgroundColor: '#1f2937',
													paddingHorizontal: 6,
													paddingVertical: 2,
													borderRadius: 4,
												}}>
												<Text
													style={{
														fontFamily:
															'GeistMono-Bold',
														fontSize: 9,
														color: theme.typography
															.subtleText,
													}}>
													AG Pro Tier
												</Text>
											</View>
										</View>
									</View>

									<View
										style={{
											flexDirection: 'row',
											flexWrap: 'wrap',
											gap: 6,
										}}>
										<View
											style={{
												backgroundColor:
													'rgba(255,255,255,0.06)',
												paddingHorizontal: 8,
												paddingVertical: 4,
												borderRadius: 6,
											}}>
											<Text
												style={{
													fontFamily:
														'GeistMono-Bold',
													fontSize: 10,
													color: theme.typography
														.mainHeading,
												}}>
												E2E ENCRYPTED
											</Text>
										</View>
										<View
											style={{
												backgroundColor:
													'rgba(255,255,255,0.06)',
												paddingHorizontal: 8,
												paddingVertical: 4,
												borderRadius: 6,
											}}>
											<Text
												style={{
													fontFamily:
														'GeistMono-Bold',
													fontSize: 10,
													color: theme.typography
														.mainHeading,
												}}>
												MULTI-DEVICE SYNC
											</Text>
										</View>
										<View
											style={{
												backgroundColor:
													'rgba(255,255,255,0.06)',
												paddingHorizontal: 8,
												paddingVertical: 4,
												borderRadius: 6,
											}}>
											<Text
												style={{
													fontFamily:
														'GeistMono-Bold',
													fontSize: 10,
													color: theme.typography
														.mainHeading,
												}}>
												LOCAL-FIRST CACHE
											</Text>
										</View>
										<View
											style={{
												backgroundColor:
													'rgba(255,255,255,0.06)',
												paddingHorizontal: 8,
												paddingVertical: 4,
												borderRadius: 6,
											}}>
											<Text
												style={{
													fontFamily:
														'GeistMono-Bold',
													fontSize: 10,
													color: theme.typography
														.mainHeading,
												}}>
												SECURE BACKUP
											</Text>
										</View>
										<View
											style={{
												backgroundColor:
													'rgba(255,255,255,0.06)',
												paddingHorizontal: 8,
												paddingVertical: 4,
												borderRadius: 6,
											}}>
											<Text
												style={{
													fontFamily:
														'GeistMono-Bold',
													fontSize: 10,
													color: theme.typography
														.mainHeading,
												}}>
												ZERO-KNOWLEDGE
											</Text>
										</View>
									</View>
								</View>
							</FloatingCard>

							{/* Bottom Card: Workspace Initialization */}
							<FloatingCard
								rotate="1.5deg"
								amplitude={5}
								duration={2900}
								delay={300}
								style={{
									position: 'absolute',
									top: 135,
									width: '100%',
									alignItems: 'center',
									zIndex: 3,
								}}>
								<Card
									variant="daily-rituals"
									title="WORKSPACE INITIALIZATION"
									tag="100% Private"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									titleColor={theme.typography.subtleText}
									contentColor={theme.typography.mainHeading}
									tagBackgroundColor="#065f46"
									tagColor="#34d399"
									tasks={[
										{
											id: '1',
											text: 'Default Rituals loaded',
											completed: true,
										},
										{
											id: '2',
											text: 'AI Copilot initialized',
											completed: true,
										},
										{
											id: '3',
											text: '40Hz Audio engine ready',
											completed: true,
										},
									]}
								/>
							</FloatingCard>

							{/* Bottom Floating Pills */}
							<FloatingCard
								rotate="-3deg"
								amplitude={4}
								duration={2400}
								delay={200}
								style={{
									position: 'absolute',
									bottom: -24,
									left: 0,
									zIndex: 5,
								}}>
								<Card
									content="🔐 Passkey Ready"
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
								rotate="3deg"
								amplitude={4}
								duration={2700}
								delay={500}
								style={{
									position: 'absolute',
									bottom: -24,
									right: 0,
									zIndex: 5,
								}}>
								<Card
									content="⚡ Instant Sync"
									cardBackgroundColor={
										theme.surface.subtleBackground
									}
									contentColor="#38bdf8"
									style={{
										paddingVertical: 8,
										paddingHorizontal: 10,
									}}
								/>
							</FloatingCard>
						</View>
					</View>

					{/* Hero + Auth Buttons Group */}
					<View style={{ gap: 20, marginBottom: 16, marginTop: 24 }}>
						<View style={{ alignItems: 'center', gap: 10 }}>
							<Text
								style={{
									fontFamily: 'Lora',
									fontSize: 32,
									textAlign: 'center',
									color: theme.typography.mainHeading,
								}}>
								Your workspace awaits.
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
								Create your account or sign in to sync your
								rituals, AI insights, and habits seamlessly
								across all your devices.
							</Text>
						</View>

						{/* Auth Options */}
						<View style={{ gap: 10, width: '100%' }}>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									backgroundColor:
										theme.surface.subtleBackground,
									borderRadius: 14,
									borderWidth: 1,
									borderColor: '#262626',
									height: 50,
									paddingHorizontal: 16,
								}}>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										gap: 12,
									}}>
									<Text
										style={{
											fontFamily: 'GeistMono-Bold',
											fontSize: 16,
											color: '#ef4444',
										}}>
										G
									</Text>
									<Text
										style={{
											fontFamily: 'Lora-Bold',
											fontSize: 14,
											color: theme.typography.mainHeading,
										}}>
										Continue with Google
									</Text>
								</View>
								<Text
									style={{
										color: theme.typography.subtleText,
									}}>
									→
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									backgroundColor:
										theme.surface.subtleBackground,
									borderRadius: 14,
									borderWidth: 1,
									borderColor: '#262626',
									height: 50,
									paddingHorizontal: 16,
								}}>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										gap: 12,
									}}>
									<Text
										style={{
											fontFamily: 'GeistMono-Bold',
											fontSize: 16,
											color: theme.typography.mainHeading,
										}}>
										
									</Text>
									<Text
										style={{
											fontFamily: 'Lora-Bold',
											fontSize: 14,
											color: theme.typography.mainHeading,
										}}>
										Continue with Apple
									</Text>
								</View>
								<View
									style={{
										backgroundColor: '#1f2937',
										paddingHorizontal: 6,
										paddingVertical: 2,
										borderRadius: 6,
									}}>
									<Text
										style={{
											fontFamily: 'GeistMono-Bold',
											fontSize: 10,
											color: theme.typography.subtleText,
										}}>
										COMING SOON
									</Text>
								</View>
							</TouchableOpacity>

							<View
								style={{
									alignItems: 'center',
									marginVertical: 4,
								}}>
								<Text
									style={{
										fontFamily: 'GeistMono',
										fontSize: 10,
										color: theme.typography.subtleText,
										letterSpacing: 1.5,
									}}>
									OR CONTINUE WITH EMAIL
								</Text>
							</View>

							<Button
								redirectionRoute="/auth/email/"
								content="Continue with Email"
								width="100%"
								height={50}
								borderRadius={14}
								textColor={theme.typography.inverseText}
								backgroundColor={theme.surface.buttonBackground}
							/>
						</View>

						<View style={{ alignItems: 'center', marginTop: 4 }}>
							<Text
								style={{
									fontFamily: 'GeistMono',
									fontSize: 11,
									textAlign: 'center',
									color: theme.typography.subtleText,
									width: '90%',
									lineHeight: 18,
								}}>
								By continuing, you agree to Stride's{' '}
								<Text
									style={{ textDecorationLine: 'underline' }}>
									Terms of Service
								</Text>{' '}
								&{' '}
								<Text
									style={{ textDecorationLine: 'underline' }}>
									Privacy Policy
								</Text>
								.
							</Text>
						</View>

						<CorousalDots dotCounts={3} activeDotPage={2} />
					</View>

					<Footer />
				</View>
			</GridBackground>
		</SafeAreaView>
	);
};

export default AuthSelectionPage;

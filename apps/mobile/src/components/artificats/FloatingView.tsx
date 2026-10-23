import { FloatingViewProps } from '@/types/floatingViewType';
import React, { useEffect } from 'react';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

export function FloatingView({ children, amplitude = 10, duration = 1800, style }: FloatingViewProps) {
  const floatY = useSharedValue(0);

  useEffect(() => {
    floatY.value = withRepeat(
      withSequence(
        withTiming(-amplitude, { duration, easing: Easing.inOut(Easing.sin) }),
        withTiming(0, { duration, easing: Easing.inOut(Easing.sin) }),
      ),
      -1, // loop forever
      false,
    );
  }, [amplitude, duration, floatY]);

  const floatStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatY.value }],
  }));

  return <Animated.View style={[style, floatStyle]}>{children}</Animated.View>;
}

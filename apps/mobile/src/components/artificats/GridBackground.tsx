import { useCustomTheme } from '@/contexts/ThemeContext';
import React, { useId } from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import Svg, { Circle, Defs, Path, Pattern, Rect } from 'react-native-svg';
import { useSafeAreaInsets, EdgeInsets } from 'react-native-safe-area-context';

export type GridBackgroundProps = {
	variant?: 'lines' | 'dots';
	spacing?: number; // px between grid cells
	strokeWidth?: number; // line thickness (lines only)
	dotRadius?: number; // dot radius (dots only)
	color?: string; // defaults to theme.borders.default
	opacity?: number; // 0 - 1
	style?: StyleProp<ViewStyle>;
	children?: React.ReactNode;
	useSafeArea?: boolean; // whether to account for safe area insets
	edges?: ('top' | 'bottom' | 'left' | 'right')[]; // which edges to pad
};

export const GridBackground = ({
	variant = 'dots',
	spacing = 24,
	strokeWidth = 1,
	dotRadius = 1.2,
	color,
	opacity = 0.6,
	style,
	children,
	useSafeArea = false,
	edges = ['top', 'bottom', 'left', 'right'],
}: GridBackgroundProps) => {
	const { theme } = useCustomTheme();
	const stroke = color ?? theme.borders.default;
	const insets = useSafeAreaInsets();

	// Unique id per instance so multiple grids on one screen don't collide
	const reactId = useId();
	const patternId = `grid-${reactId.replace(/:/g, '')}`;

	const safeAreaStyle: ViewStyle = useSafeArea
		? {
				paddingTop: edges.includes('top') ? insets.top : 0,
				paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
				paddingLeft: edges.includes('left') ? insets.left : 0,
				paddingRight: edges.includes('right') ? insets.right : 0,
		  }
		: {};

	return (
		<View style={[styles.container, safeAreaStyle, style]}>
			<Svg
				style={StyleSheet.absoluteFill}
				width="100%"
				height="100%"
				pointerEvents="none">
				<Defs>
					<Pattern
						id={patternId}
						width={spacing}
						height={spacing}
						patternUnits="userSpaceOnUse">
						{variant === 'lines' ? (
							// Top + left edge of each cell = a grid line
							<Path
								d={`M 0 0 L ${spacing} 0 M 0 0 L 0 ${spacing}`}
								stroke={stroke}
								strokeWidth={strokeWidth}
								fill="none"
							/>
						) : (
							// One dot centred in each cell
							<Circle
								cx={spacing / 2}
								cy={spacing / 2}
								r={dotRadius}
								fill={stroke}
							/>
						)}
					</Pattern>
				</Defs>
				<Rect
					x={0}
					y={0}
					width="100%"
					height="100%"
					fill={`url(#${patternId})`}
					opacity={opacity}
				/>
			</Svg>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, overflow: 'hidden' },
});

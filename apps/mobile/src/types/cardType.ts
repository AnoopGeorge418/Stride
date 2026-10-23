import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CardProps = {
	children: ReactNode;
	backgroundColor?: string;
	style?: StyleProp<ViewStyle>;
};


import { ViewStyle } from "node_modules/react-native/types_generated/Libraries/StyleSheet/StyleSheetTypes";
import { PropsWithChildren } from "react";
import { StyleProp } from "react-native";

export type FloatingViewProps = PropsWithChildren<{
  amplitude?: number; // How far it rises and falls, in px
  duration?: number; // Time for one half-cycle, in ms
  style?: StyleProp<ViewStyle>;
}>;

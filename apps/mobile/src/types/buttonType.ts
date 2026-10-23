import { Href } from 'expo-router';
import { ImageSourcePropType } from 'react-native';

export type ButtonProps = {
	content: string;
	redirectionRoute?: Href;
	width?: '100%' | '90%' | '80%' | '50%' | number | string;
	height?: number;
	borderRadius?: number;
	textColor?: string;
	backgroundColor?: string;
    icon?: ImageSourcePropType;
    font?: string
};

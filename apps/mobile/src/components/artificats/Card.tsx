import { useCustomTheme } from '@/contexts/ThemeContext';
import { CardProps } from '@/types/cardType';
import { Text, View } from 'react-native';

export const Card = ({ content }: CardProps) => {

    const { theme } = useCustomTheme();
    
	return (
		<View className="flex p-2 justify-center items-center" style={{ borderRadius: 100, borderColor: theme.borders.focus, backgroundColor: theme.surface.subtleBackground }}>
            <Text style={{ fontFamily: "GeistMono", color: theme.typography.subtleText }} className='mx-2 tracking-widest'>
                { content }
			</Text>
		</View>
	);
};

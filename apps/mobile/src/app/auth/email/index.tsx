import { useCustomTheme } from '@/contexts/ThemeContext';
import { Text, View } from 'react-native';

const EmailLogin = () => {
	const { theme } = useCustomTheme();

	return (
        <View>
            <Text>Email Login</Text>
		</View>
	);
};

export default EmailLogin;

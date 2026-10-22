import { View } from 'react-native';
import { Logo } from '../artificats/Logo';
import { Button } from '../artificats/Button';
import { Card } from '../artificats/Card';

export const Navbar = () => {

	return (
		<View className="flex flex-row justify-between items-center">
            {/*logo*/}
            <View className="flex flex-row justify-center items-center">
                <Logo />
            </View>

            {/*version & skip*/}
            <View className="flex flex-row gap-2 justify-center items-center ">
                <Card content="V1.0"/>
                <Button content="Skip" redirectionRoute="/onboarding/index"/>
            </View>
		</View>
	);
};

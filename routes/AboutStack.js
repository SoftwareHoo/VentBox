import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import About from '../screens/About';
import Header from '../components/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About' navigation={navigation} />,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor:'#444',
        headerStyle: { backgroundColor: 'white', height: 120 }
    }
});

export default createAppContainer(AboutStack);
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Header from '../components/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Let It Out!' navigation={navigation} />,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor:'#444',
        headerStyle: { backgroundColor: 'white', height: 120 }
    }
});

export default createAppContainer(HomeStack);
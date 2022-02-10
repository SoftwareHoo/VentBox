import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import MyNotes from '../screens/MyNotes';
import Header from '../components/Header';

const screens = {
    MyNotes: {
        screen: MyNotes,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Active Notes' navigation={navigation} />,
            }
        }
    },
}

const MyNotesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor:'#444',
        headerStyle: { backgroundColor: 'white', height: 120 }
    }
});

export default createAppContainer(MyNotesStack);
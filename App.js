import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Home from './screens/Home';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Navigator from './routes/Drawer'

const getFonts = () => Font.loadAsync({
  'NewsCycle-Regular': require('./assets/fonts/NewsCycle-Regular.ttf'),
  'NewsCycle-Bold': require('./assets/fonts/NewsCycle-Bold.ttf')
});


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)} 
        onError={() => console.log('error')}
      />
    )
  }

}
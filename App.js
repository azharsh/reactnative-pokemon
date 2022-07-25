import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './features/home';
import Detail from './features/detail';
import Pokedex from './features/pokedex';


const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          styles={styles.container}
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
         name="Pokedex" 
         component={Pokedex}
         options={{headerShown: false}}
        />
      </Stack.Navigator>
       
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

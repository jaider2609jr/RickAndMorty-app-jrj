import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './scr/screens/HomeScreen';
import Details from './scr/screens/Details';
import { CharacterI } from './scr/models/Character';

export type RootStackParamList = {
  Home: undefined;
  Details: { character: CharacterI };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark'/>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Personajes', headerStyle:{backgroundColor:'white', shadowColor:'#2F4F4F'} }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Detalle Personaje', headerStyle:{backgroundColor:'#F8F8FF', shadowColor:'#2F4F4F'} }} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1
  },
});

registerRootComponent(App);
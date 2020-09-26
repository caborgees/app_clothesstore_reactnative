import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Catalogo from './src/pages/Catalogo';
import Home from './src/pages/Home';
import Roupa from './src/pages/Roupa';


function Sacola({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Minha sacola</Text>
      
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}
      options=
      {{headerTintColor: '#FFF',
          headerShown: false}} />
      <HomeStack.Screen name="Catalogo" component={Catalogo}
      options=
      {{headerTintColor: '#FFF',
          headerShown: false}} />
      <HomeStack.Screen name="Roupa" component={Roupa} 
      options=
      {{headerTintColor: '#FFF',
          headerShown: false}}/>


    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Sacola" component={Sacola} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-home'
                      : 'ios-home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Sacola') {
              return (
                <Ionicons
                  name={focused ? 'ios-cart' : 'ios-cart'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#C85108',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Sacola" component={Sacola} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesContextProvider from './store/context/movies-context';

import ProfileScreen from './screens/bottomTab/profileScreen';
import PopularScreen from './screens/drawer/PopularScreen';
import TopRatedScreen from './screens/drawer/TopRatedScreen';
import MovieOverViewScreen from './screens/MovieOverViewScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={PopularScreen} />
      <Tab.Screen name="Favorites" component={TopRatedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <MoviesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MovieDetails" component={MovieOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MoviesContextProvider>
  );
}

export default App;

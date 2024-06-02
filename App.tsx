import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesContextProvider from './store/context/movies-context';
import {Provider} from 'react-redux';
import store from './store/redux/store';

import ProfileScreen from './screens/bottomTabs/profileScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SelectedFilterContextProvider from './store/context/selected-filter-context';
import MoviesScreen from './screens/bottomTabs/MoviesScreen';
import FavoritesScreen from './screens/bottomTabs/FavoritesScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <SelectedFilterContextProvider>
        <MoviesContextProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MovieDetails"
                component={MovieDetailsScreen}
              />
              <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </MoviesContextProvider>
      </SelectedFilterContextProvider>
    </Provider>
  );
}

export default App;

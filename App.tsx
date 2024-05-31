import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoviesContextProvider from "./store/context/movies-context";

import ProfileScreen from "./screens/bottomTab/profileScreen";
import MovieOverViewScreen from "./screens/MovieOverViewScreen";
import SelectedFilterContextProvider from "./store/context/selected-filter-context.tsx";
import MoviesScreen from "./screens/bottomTab/MoviesScreen.tsx";
import FavoritesScreen from "./screens/bottomTab/FavoritesScreen";
import SearchScreen from "./screens/SearchScreen.tsx";

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
    <SelectedFilterContextProvider>
      <MoviesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MovieDetails" component={MovieOverViewScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MoviesContextProvider>
    </SelectedFilterContextProvider>
  );
}

export default App;

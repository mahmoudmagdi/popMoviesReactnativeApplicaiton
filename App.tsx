import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MoviesContextProvider from "./store/context/movies.context.tsx";
import { Provider } from "react-redux";
import store from "./store/redux/store";

import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import MoviesScreen from "./screens/bottomTabs/MoviesScreen";
import FavoritesScreen from "./screens/bottomTabs/FavoritesScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/bottomTabs/SettingsScreen.tsx";
import { Theme } from "./model/settings/Theme.tsx";
import { GlobalStyle } from "./constants/styles.tsx";
import { LanguageProvider, useLanguage } from "./store/context/language.context.tsx";
import { ThemeProvider, useTheme } from "./store/context/theme.context.tsx";
import Icon from "react-native-vector-icons/FontAwesome5";
import { GlobalContent } from "./constants/content.ts";
import { View } from "react-native";
import SelectedFilterContextProvider from "./store/context/selected-filter-context.tsx";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"]
      }}
      screenOptions={{
        headerTintColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"],
        tabBarActiveTintColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"],
        tabBarInactiveTintColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["inactive"] : GlobalStyle.colorLight["inactive"],
        tabBarStyle: {
          backgroundColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["headerBackground"] : GlobalStyle.colorLight["headerBackground"]
        },
        headerStyle: {
          backgroundColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["headerBackground"] : GlobalStyle.colorLight["headerBackground"]
        }
      }}>
      <Tab.Screen
        name={GlobalContent[language.name].movies}
        component={MoviesScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="film" size={20} color={color} />
        }}
      />
      <Tab.Screen
        name={GlobalContent[language.name].favorites}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="star" size={20} color={color} />
        }}
      />
      <Tab.Screen
        name={GlobalContent[language.name].settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="cog" size={20} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <Stack.Navigator
      screenOptions={{
        fullScreenGestureEnabled: true,
        contentStyle: {
          backgroundColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["background"] : GlobalStyle.colorLight["background"]
        },
        headerStyle: {
          backgroundColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["headerBackground"] : GlobalStyle.colorLight["headerBackground"]
        },
        headerTintColor: (theme === Theme.Dark) ? GlobalStyle.colorsDark["accent"] : GlobalStyle.colorLight["accent"]
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: GlobalContent[language.name].home
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen} />
    </Stack.Navigator>
  );
}

function MainView({ children }: { children: React.JSX.Element }) {
  const { language } = useLanguage();
  return (
    <View style={{
      flex: 1,
      direction: (language.code === "ar") ? "rtl" : "ltr"
    }}>
      {children}
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <ThemeProvider>
          <SelectedFilterContextProvider>
            <MoviesContextProvider>
              <NavigationContainer>
                <MainView>
                  <AppNavigation />
                </MainView>
              </NavigationContainer>
            </MoviesContextProvider>
          </SelectedFilterContextProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
}

export default App;

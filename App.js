// Section 6 in React Native explains everything aboit the react navigation

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#350101" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#5a1818" },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories"
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* explained in 102 */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#350101" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#5a1818" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //explained in 103
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            //in this way we cant interact directly with the screen in where is the button.
            // options={{
            //   headerRight: () => {
            //     return <Text>In the header</Text>;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

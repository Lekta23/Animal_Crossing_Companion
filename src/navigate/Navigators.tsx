import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoute } from "./AppRoute";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FishScreen from "../screens/FishScreen";
import BugsScreen from "../screens/BugsScreen";
import FossilsScreen from "../screens/FossilsScreen";
import SeaScreen from "../screens/SeaScreen";


type Props = {};

const Navigators = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppRoute.HOME_SCREEN}>
          <Stack.Screen name={AppRoute.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={AppRoute.FISH_SCREEN} component={FishScreen} />
          <Stack.Screen name={AppRoute.BUGS_SCREEN} component={BugsScreen} />
          <Stack.Screen name={AppRoute.FOSSILS_SCREEN} component={FossilsScreen} />
          <Stack.Screen name={AppRoute.SEA_SCREEN} component={SeaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigators;

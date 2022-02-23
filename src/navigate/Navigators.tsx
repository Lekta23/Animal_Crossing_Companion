import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoute } from "./AppRoute";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FishScreen from "../screens/FishScreen";

type Props = {};

const Navigators = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={AppRoute.HOME_SCREEN}
        >
          <Stack.Screen name={AppRoute.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={AppRoute.FISH_SCREEN} component={FishScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;

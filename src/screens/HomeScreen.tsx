import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { AppRoute } from "../navigate/AppRoute";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Animal Crossing New Horizon</Text>
      <Button
        style={styles.button}
        icon="cordova"
        color="black"
        mode="contained"
        onPress={() => {
          props.navigation.navigate(AppRoute.BUGS_SCREEN);
        }}
      >
        Insectes
      </Button>
      <Button
        style={styles.button}
        icon="sword"
        color="black"
        mode="contained"
        onPress={() => {
          props.navigation.navigate(AppRoute.FISH_SCREEN);
        }}
      >
        Poissons
      </Button>
      <Button
        style={styles.button}
        icon="diamond-stone"
        color="black"
        mode="contained"
        onPress={() => {
          props.navigation.navigate(AppRoute.FOSSILS_SCREEN);
        }}
      >
        Fossils
      </Button>
      <Button
        style={styles.button}
        icon="treasure-chest"
        color="black"
        mode="contained"
        onPress={() => {
          props.navigation.navigate(AppRoute.SEA_SCREEN);
        }}
      >
        Océans
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    color: "white",
    borderColor: "#8C867C",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 4,
    margin: 10,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex : 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;

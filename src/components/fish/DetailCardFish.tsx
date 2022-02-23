import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  ImageBackgroundBase,
} from "react-native";
import React from "react";
import { Colors } from "react-native-paper";

type Props = {};

const image = {
  uri: "https://jeuxpourtous.org/wp-content/uploads/2020/05/Animal-Crossing-New-Horizons-Liste-des-fonds-d39ecran-animes.jpeg",
};

const DetailCardFish = ({ route, navigation }: any) => {
  const { price, name, image_uri, availability } = route.params.item;
  console.log(name);
  let mois: string;
  let time: string;

  if (availability.isAllYear) {
    mois = "1-12";
  } else {
    mois = availability["month-northern"];
  }

  if (availability.isAllDay) {
    time = "24/24";
  } else {
    time = availability.time;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.name}>{name["name-EUfr"]}</Text>
        <Image style={styles.img} source={{ uri: image_uri }} />
        <Text style={styles.text}>
          Clochette : {price} --- Rareté : {availability.rarity}
        </Text>
        <Text style={styles.text}>
          Apparition dans les mois (Mois début à Mois Fin) : {mois}
        </Text>
        <Text style={styles.text}>
          Apparition dans les heures (heure de début jusqu'a heure de Fin) :{" "}
          {time}
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    minHeight: 200,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.black,
  },

  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    borderColor: "#8C867C",
    borderStyle: "solid",
    borderWidth: 3,
    padding: 4,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default DetailCardFish;

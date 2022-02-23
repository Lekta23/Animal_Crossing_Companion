import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Logs } from "expo";
import { Card, Paragraph } from "react-native-paper";
import { AppRoute } from "../../navigate/AppRoute";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const CardFish = ({ item }: any) => {
  console.log(item);

  const navigation = useNavigation();
  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate(AppRoute.DETAILFISH_SCREEN, { item })}
    >
      <Card.Cover source={{ uri: item.image_uri }} />
      <Card.Title
        titleStyle={styles.text}
        title={item.name["name-EUfr"]}
        subtitle={item.price + " Clochettes"}
      />
      <Card.Content>
        <Paragraph>Rareté : {item.availability.rarity}</Paragraph>
        <Paragraph>Location : {item.availability.location}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 200,
    margin: 20,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
  },
  buy: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    textTransform: "uppercase",
  },
});

export default CardFish;

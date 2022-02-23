import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { useFish } from "../hooks/useFish";
import CardFish from "../components/fish/CardFish";
import { Colors } from "react-native-paper";
import SearchBar from "../components/searchBar";

type Props = {};

const FishScreen = (props: Props) => {
  const { isLoading, isError, data } = useFish();
  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const renderItem = (props: any) => <CardFish {...props} />;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
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
    flex: 1,
    backgroundColor: Colors.grey300,
  },
});

export default FishScreen;

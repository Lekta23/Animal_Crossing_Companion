import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  console.log(searchQuery);
  
  return (
    <>
      <TextInput
       style={styles.input}
        onChangeText={setSearchQuery}
        placeholder="Rechercher un poisson"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;

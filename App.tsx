import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigators from "./src/navigate/Navigators";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>

        <Navigators />
    </QueryClientProvider>
  );
}


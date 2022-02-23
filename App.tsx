import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigators from './src/navigate/Navigators';


const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container}>
      <Navigators/>
    </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

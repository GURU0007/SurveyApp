import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Toolbars/Header';
import Search from './Searchbar';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Search />
        <Header />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fffa',
  },
});

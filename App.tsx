//import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text,Alert } from 'react-native';

function App() {
  //const [message, setMessage] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
          <Text style={styles.buttonText}>Hello World</Text>
        </TouchableOpacity>        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor:'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

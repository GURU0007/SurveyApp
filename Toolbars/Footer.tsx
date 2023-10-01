import {View,Text,StyleSheet} from 'react-native';
import React from 'react';

function FooterComponent() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>menu</Text>
        <Text style={styles.footerText}>search</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: 'blue', // Customize the background color
      padding: 10,
      alignItems: 'center',
    },
    footerText: {
      color: 'white', // Customize the text color
      fontSize: 18,
    },
  });
  
export default FooterComponent;
 
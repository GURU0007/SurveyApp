import React from 'react';
import {
  HStack,
  Text,
  NativeBaseProvider,
  VStack,
  View
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

function Header() {
  return (
    <VStack flex={1} justifyContent="flex-end">
      <HStack
        justifyContent="space-around"
        alignItems="center"
        bg="primary.500"
        height="20"
        p={1}
      >
        
        <HStack space={2} alignItems="center">
          <Text>
            <Ionicons name="mail" size={24} color="white" />
          </Text>
          <Text color="white">Contact</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <Text>
            <Ionicons name="information-circle" size={24} color="white" />
          </Text>
          <Text color="white">About Us</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <Text>
            <Ionicons name="chatbubble-ellipses" size={24} color="white" />
          </Text>
          <Text color="white">Feedback</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <Text>
            <Ionicons name="person" size={24} color="white" />
          </Text>
          <Text color="white">Profile</Text>
        </HStack>
      </HStack>
      <View position="absolute" 
        bottom={0} 
        left={0} 
        right={0} 
        height={5} // Adjust this value to set the height of the black bar
        bg="black" />
    </VStack>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
    </NativeBaseProvider>
  );
}

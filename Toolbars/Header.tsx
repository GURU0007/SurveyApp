import React from 'react';
import { HStack, Text, NativeBaseProvider, VStack, View } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCircleInfo, faComment, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <VStack flex={1} justifyContent="flex-end">
      <HStack
        justifyContent="space-around"
        alignItems="center"
        bg="primary.500"
        height={20}
        bottom={8}
        p={1}
      >
        <HStack space={2} alignItems="center">
          <FontAwesomeIcon icon={faHome} size={24} />
          <Text color="white">Home</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <FontAwesomeIcon icon={faCircleInfo} size={24} />
          <Text color="white">About Us</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <FontAwesomeIcon icon={faComment} size={24}/>
          <Text color="white">Feedback</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <FontAwesomeIcon icon={faUser} size={24}/>
          <Text color="white">Profile</Text>
        </HStack>
      </HStack>
      <View
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={10} // Adjust this value to set the height of the black bar
        bg="black"
      />
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

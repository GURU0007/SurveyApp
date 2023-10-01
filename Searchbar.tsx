import React, { useState } from 'react';
import { Text,View,TouchableOpacity,Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  function searchRec(){
    Alert.alert('success')
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ margin: 20, borderRadius: 25 }}
      />
      
      <TouchableOpacity 
        onPress={searchRec}
        style={{
          backgroundColor: 'green',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: 100, 
          height: 50, 
          left:140,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Search;

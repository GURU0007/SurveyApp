import React, { useState } from 'react';
import {View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  function searchRec() {
    Alert.alert('Success');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20, borderRadius: 25, backgroundColor: 'skyblue', paddingLeft: 10 }}>
        <TextInput
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={searchRec} style={{ padding: 10 }}>
          <FontAwesomeIcon icon={faSearch} size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

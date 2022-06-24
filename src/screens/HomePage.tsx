import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchHeader from '../components/SearchHeader';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {container, content} = styles;

  const triggerSearch = () => {
    console.log(searchTerm);
  };

  const clearInput = () => setSearchTerm('');

  return (
    <View style={container}>
      <SearchHeader
        searchTerm={searchTerm}
        clearInput={clearInput}
        onKeyPress={triggerSearch}
        onChangeText={setSearchTerm}
      />
      <View style={content}>
        <Text>Content Here... FlatList</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
});

export default HomePage;

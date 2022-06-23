import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    container,
    header,
    headerRow,
    inputContainer,
    inputStyle,
    searchIconContainer,
    content,
  } = styles;

  const triggerSearch = () => {
    console.log(searchTerm);
  };

  return (
    <View style={container}>
      <View style={header}>
        <View style={headerRow}>
          <View style={inputContainer}>
            <TextInput
              style={inputStyle}
              value={searchTerm}
              placeholder={'search'}
              autoCapitalize="none"
              placeholderTextColor="#a55266"
              onChangeText={(text: string) => setSearchTerm(text)}
              onKeyPress={triggerSearch}
            />
          </View>
          <View style={searchIconContainer}>
            <Icon name="ios" size={30} color={'#b64190'} />
          </View>
        </View>
      </View>

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
  header: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#6e5d96',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {flex: 1},
  inputStyle: {
    height: 54,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1d72bd',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchIconContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  content: {flex: 1, paddingVertical: 10},
});

export default HomePage;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface SearchStateProps {
  initialState: boolean;
}

const SearchState: React.FC<SearchStateProps> = ({initialState}) => {
  const happy = require('../assets/happy.png');
  const sad = require('../assets/sad.png');
  const initialText =
    'Start typing into the search bar to see wonderful images';
  const emptyResponseText = 'No Results Found';

  const {container, imgContainer, imageStyle, txtContainer, textStyle} = styles;
  const selectedImage = initialState ? happy : sad;
  const selectedText = initialState ? initialText : emptyResponseText;
  return (
    <View style={container}>
      <View style={imgContainer}>
        <Image source={selectedImage} style={imageStyle} />
      </View>
      <View style={txtContainer}>
        <Text style={textStyle}> {selectedText}</Text>
      </View>
    </View>
  );
};

// #F7F7F7;
// #BEBEBE;
// #D1DEDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: {
    marginTop: 150,
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  txtContainer: {
    flex: 1,
    margin: 20,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#BEBEBE',
  },
});

export default SearchState;

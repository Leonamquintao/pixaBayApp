import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Hits} from '../types';

const windowHeight = Dimensions.get('window').height;
const defaultUser = require('../assets/user.png');

const ListItem = ({item}: {item: Hits}) => {
  const navigation = useNavigation<any>();

  const {
    container,
    detailsRow,
    thumbContainer,
    thumbnail,
    infoStyle,
    title,
    descTxt,
    textAdjust,
    align,
    imgContainer,
    imgStyle,
  } = styles;

  return (
    <TouchableOpacity
      style={container}
      onPress={() => navigation.navigate('DetailsPage', {item: item})}>
      <View style={detailsRow}>
        <View style={thumbContainer}>
          {item.userImageURL ? (
            <Image source={{uri: item.userImageURL}} style={thumbnail} />
          ) : (
            <Image source={defaultUser} style={thumbnail} />
          )}
        </View>
        <View style={infoStyle}>
          <Text style={title}>{item.user}</Text>
          <Text style={descTxt}>{item.type}</Text>
        </View>
        <View style={textAdjust}>
          <Text style={title}>Views</Text>
          <Text style={[descTxt, align]}>{item.views}</Text>
        </View>
      </View>
      <View style={imgContainer}>
        <Image source={{uri: item.webformatURL}} style={imgStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#6e5d96',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  detailsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  thumbContainer: {
    flex: 0.2,
    marginRight: 2,
  },
  infoStyle: {
    flex: 1,
    marginHorizontal: 2,
  },
  textAdjust: {
    flex: 0.2,
    marginHorizontal: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descTxt: {
    fontSize: 12,
    color: '#C0C0C0',
  },
  align: {
    textAlign: 'center',
  },
  imgContainer: {
    marginVertical: 8,
  },
  imgStyle: {
    width: '100%',
    height: windowHeight / 4,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default ListItem;

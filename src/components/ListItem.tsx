/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Hits} from '../types';

const windowHeight = Dimensions.get('window').height;

const ListItem = ({item}: {item: Hits}) => {
  const navigation = useNavigation<any>();
  const {container} = styles;
  return (
    <TouchableOpacity
      style={container}
      onPress={() => navigation.navigate('DetailsPage', {item: item})}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 0.3}}>
          <Image
            source={{uri: item.userImageURL}}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 2}}>
          <Text>{item.user}</Text>
          <Text>{item.type}</Text>
        </View>
        <View style={{flex: 0.2, marginHorizontal: 2}}>
          <Text>Views</Text>
          <Text>{item.views}</Text>
        </View>
      </View>
      <View style={{marginVertical: 8}}>
        <Image
          source={{uri: item.userImageURL}}
          style={{
            width: '100%',
            height: windowHeight / 4,
            resizeMode: 'cover',
            borderRadius: 5,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default ListItem;

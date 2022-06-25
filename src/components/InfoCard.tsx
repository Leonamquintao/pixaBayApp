import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InfoCardProps {
  imgWidth: number;
  imgHeight: number;
}

const InfoCard: React.FC<InfoCardProps> = ({imgWidth, imgHeight}) => {
  return (
    <View style={styles.container}>
      <Icon name="picture-o" size={40} color={'#48484a'} />
      <Text style={styles.textStyle}>W {imgWidth}</Text>
      <Text style={styles.textStyle}> X </Text>
      <Text style={styles.textStyle}>H {imgHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
  },
  textStyle: {
    color: '#48484a',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InfoCard;

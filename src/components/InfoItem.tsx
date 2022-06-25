import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InfoRowProps {
  value: string;
  description: string;
  icon: string;
}

const InfoItem: React.FC<InfoRowProps> = ({value, description, icon}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} color={'#48484a'} style={styles.margin} />
      <Text style={styles.textStyle}>{value}</Text>
      <Text style={styles.textStyle}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  margin: {marginRight: 4},
  textStyle: {
    color: '#48484a',
    marginLeft: 2,
    fontSize: 16,
    marginVertical: 4,
  },
});

export default InfoItem;

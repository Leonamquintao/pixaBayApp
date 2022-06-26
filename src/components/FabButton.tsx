import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FabButtonProps {
  onPress: () => void;
}

const FabButton: React.FC<FabButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="chevron-left" size={30} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 60,
    height: 60,
    borderWidth: 0.6,
    borderColor: '#48484a',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    marginRight: 5,
    alignSelf: 'center',
  },
});

export default FabButton;

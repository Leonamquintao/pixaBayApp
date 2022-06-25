import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface LandingPageProps {
  navigation: NavigationProp<ParamListBase>;
}

const LandingPage: React.FC<LandingPageProps> = ({navigation}) => {
  const logo = require('../assets/triangle.png');

  const {container, content, imageStyle, textStyle, linkStyle} = styles;
  return (
    <View style={container}>
      <Image source={logo} style={imageStyle} />

      <View style={content}>
        <Text style={textStyle}>Welcome to this awesome App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={textStyle}>
            Please click <Text style={linkStyle}>HERE</Text> to start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginVertical: 30,
  },
  imageStyle: {
    width: 300,
    height: 200,
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    margin: 8,
  },
  linkStyle: {
    color: '#db227d',
    fontWeight: 'bold',
  },
});

export default LandingPage;

/* eslint-disable react-native/no-inline-styles */
import {ParamListBase} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FabButton from '../components/FabButton';
import InfoCard from '../components/InfoCard';
import InfoItem from '../components/InfoItem';

const windowHeight = Dimensions.get('window').height;
const defaultUser = require('../assets/user.png');

interface DetailsPageProps {
  route: ParamListBase;
  navigation: any;
}

const DetailsPage: React.FC<DetailsPageProps> = ({route, navigation}) => {
  const {
    userImageURL,
    user,
    webformatURL,
    tags,
    imageSize,
    views,
    likes,
    comments,
    downloads,
    imageWidth,
    imageHeight,
  } = route.params?.item;

  const {
    container,
    flex1,
    headerDetails,
    thumbContainer,
    textStyle,
    titleStyle,
    userContainer,
    thumbnail,
    imgStyle,
    infoContainer,
    descriptionContainer,
    descStyle,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ScrollView style={flex1}>
        <View style={userContainer}>
          <View style={thumbContainer}>
            {userImageURL ? (
              <Image source={{uri: userImageURL}} style={thumbnail} />
            ) : (
              <Image source={defaultUser} style={thumbnail} />
            )}
          </View>
          <View style={headerDetails}>
            <Text style={titleStyle}>{user}</Text>
            <Text style={textStyle}>Tags: {tags}</Text>
          </View>
        </View>

        <View style={flex1}>
          <Image source={{uri: webformatURL}} style={imgStyle} />
        </View>
        <View style={{marginTop: -30}}>
          <InfoCard imgWidth={imageWidth} imgHeight={imageHeight} />
        </View>
        <View style={infoContainer}>
          <View style={flex1}>
            <InfoItem value={views} description={'Views'} icon={'eye'} />
            <InfoItem value={likes} description={'likes'} icon={'thumbs-up'} />
            <InfoItem
              value={comments}
              description={'comments'}
              icon={'commenting'}
            />
          </View>
          <View style={flex1}>
            <InfoItem
              value={(imageSize / 1024 / 1024).toFixed(2)}
              description={'MB'}
              icon={'database'}
            />
            <InfoItem
              value={downloads}
              description={'downloads'}
              icon={'download'}
            />
          </View>
        </View>

        <View style={descriptionContainer}>
          <Text style={titleStyle}>Description</Text>
          <Text style={descStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et impedit
            ea ad porro magnam dolorem sed voluptatem amet soluta consectetur
            explicabo magni eligendi temporibus maxime vitae doloribus, ex eius
            suscipit?
          </Text>
          <Text style={descStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et impedit
            ea ad porro magnam dolorem sed voluptatem amet soluta consectetur
            explicabo magni eligendi temporibus maxime vitae doloribus, ex eius
            suscipit?
          </Text>
        </View>
      </ScrollView>
      <FabButton onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  userContainer: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 4,
    marginVertical: 10,
  },
  headerDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#48484a',
    marginLeft: 2,
    fontSize: 16,
  },
  titleStyle: {
    color: '#48484a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  thumbContainer: {
    flex: 0.2,
    marginRight: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  imgStyle: {
    marginVertical: 10,
    width: '100%',
    height: windowHeight / 2,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 0.2,
    flexDirection: 'row',
  },
  descriptionContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  descStyle: {
    marginVertical: 10,
    color: '#48484a',
  },
});

export default DetailsPage;

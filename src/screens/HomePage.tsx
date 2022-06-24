import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SearchState from '../components/SearchState';
import SearchHeader from '../components/SearchHeader';
import {SearchHits} from '../types';
import ListItem from '../components/ListItem';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchHits, setSearchHits] = useState<SearchHits | null>(null);

  const {container, content, flatListStyle} = styles;

  const triggerSearch = () => {
    console.log(searchTerm);
  };

  const clearInput = () => setSearchTerm('');

  const data = {
    total: 4692,
    totalHits: 500,
    hits: [
      {
        id: 195893,
        pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
        type: 'photo',
        tags: 'blossom, bloom, flower',
        previewURL:
          'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
        previewWidth: 150,
        previewHeight: 84,
        webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
        webformatWidth: 640,
        webformatHeight: 360,
        largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
        fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
        imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
        imageWidth: 4000,
        imageHeight: 2250,
        imageSize: 4731420,
        views: 7671,
        downloads: 6439,
        likes: 5,
        comments: 2,
        user_id: 48777,
        user: 'Josch13',
        userImageURL:
          'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
      },
      {
        id: 195894,
        pageURL: 'https://pixabay.com/en/blossom-bloom-flower-195893/',
        type: 'photo',
        tags: 'blossom, bloom, flower',
        previewURL:
          'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg',
        previewWidth: 150,
        previewHeight: 84,
        webformatURL: 'https://pixabay.com/get/35bbf209e13e39d2_640.jpg',
        webformatWidth: 640,
        webformatHeight: 360,
        largeImageURL: 'https://pixabay.com/get/ed6a99fd0a76647_1280.jpg',
        fullHDURL: 'https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg',
        imageURL: 'https://pixabay.com/get/ed6a9364a9fd0a76647.jpg',
        imageWidth: 4000,
        imageHeight: 2250,
        imageSize: 4731420,
        views: 7671,
        downloads: 6439,
        likes: 5,
        comments: 2,
        user_id: 48777,
        user: 'RonTim',
        userImageURL:
          'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
      },
    ],
  };

  return (
    <View style={container}>
      <SearchHeader
        searchTerm={searchTerm}
        clearInput={clearInput}
        onKeyPress={triggerSearch}
        onChangeText={setSearchTerm}
      />
      <View style={content}>
        <FlatList
          style={flatListStyle}
          contentContainerStyle={{}}
          data={data.hits}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ListItem item={item} />}
          onEndReachedThreshold={0.1}
          onEndReached={() => console.log('hitEnd')}
        />
        {/* {data ? (
          <SearchState initialState={searchHits === null ? null : []} />
        ) : (
         
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
  flatListStyle: {
    flex: 1,
    marginTop: 10,
  },
});

export default HomePage;

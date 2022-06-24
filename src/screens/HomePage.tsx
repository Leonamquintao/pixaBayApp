import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SearchState from '../components/SearchState';
import SearchHeader from '../components/SearchHeader';
import {Hits} from '../types';
import ListItem from '../components/ListItem';
import {fetchApiData} from '../services/HttpService';

const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [pristine, setPristine] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const [totalHits, setTotalHits] = useState<number | null>(null);
  const [searchHits, setSearchHits] = useState<Hits[]>([]);

  const {container, headerContainer, content} = styles;

  const triggerSearch = async () => {
    try {
      if (searchTerm.length >= 2) {
        setPristine(false);
        setIsLoading(true);
        const response = await fetchApiData(page, searchTerm);
        setTotalHits(response.data.total);

        setSearchHits([...searchHits, ...response.data.hits]);
        setIsLoading(false);
        setPage(page + 1);
      }
    } catch (err) {
      reset();
    }
  };

  const reset = () => {
    setIsLoading(false);
    setTotalHits(null);
    setSearchHits([]);
    setPristine(true);
    setPage(1);
  };

  const clearInput = () => {
    setSearchTerm('');
    reset();
  };

  return (
    <View style={container}>
      <View style={headerContainer}>
        <SearchHeader
          searchTerm={searchTerm}
          clearInput={clearInput}
          onKeyPress={triggerSearch}
          onChangeText={setSearchTerm}
          totalHits={totalHits}
          isLoading={isLoading}
        />
      </View>
      <View style={content}>
        {searchHits && searchHits?.length > 0 ? (
          <FlatList
            contentContainerStyle={{}}
            data={searchHits}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <ListItem item={item} />}
            onEndReachedThreshold={0.05}
            onEndReached={triggerSearch}
          />
        ) : (
          <SearchState initialState={pristine} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flex: 0.2,
    marginVertical: 4,
  },
  content: {
    flex: 1,
  },
});

export default HomePage;

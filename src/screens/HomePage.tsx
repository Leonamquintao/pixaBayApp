import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SearchState from '../components/SearchState';
import SearchHeader from '../components/SearchHeader';
import {Hits} from '../types';
import ListItem from '../components/ListItem';
import {fetchApiData} from '../services/HttpService';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {
  addHits,
  addSearch,
  clearSearch,
  deleteHits,
  storedLastSearch,
  totalHitsStored,
} from '../store/hitsSlice';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchSelector = useAppSelector(storedLastSearch);
  const hitsSelector = useAppSelector(totalHitsStored);

  const [page, setPage] = useState<number>(1);
  const [pristine, setPristine] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [totalHits, setTotalHits] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchHits, setSearchHits] = useState<Hits[]>([]);

  const {container, headerContainer, content} = styles;

  useEffect(() => {
    setSearchTerm(searchSelector);
    setSearchHits(hitsSelector);
  }, [hitsSelector, searchSelector]);

  const triggerSearch = async () => {
    try {
      if (searchTerm.length >= 2) {
        setPristine(false);
        setIsLoading(true);
        const response = await fetchApiData(page, searchTerm);
        setTotalHits(response.data.total);

        setSearchHits([...searchHits, ...response.data.hits]);

        dispatch(addHits(response.data.hits));
        dispatch(addSearch(searchTerm));

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
    dispatch(deleteHits());
    dispatch(clearSearch());
    setPage(1);
  };

  const clearInput = () => {
    setSearchTerm('');
    reset();
  };

  return (
    <View style={container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
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
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'ios' ? 2 : 14,
  },
  headerContainer: {
    flex: 0.2,
    paddingVertical: 2,
  },
  content: {
    flex: 1,
  },
});

export default HomePage;

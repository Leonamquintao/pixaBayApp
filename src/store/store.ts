import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = AsyncStorage;

import hitsReducer from './hitsSlice';
import {middlewareList} from './middlewareList';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  hits: hitsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  middleware: middlewareList,
  reducer: persistedReducer,
});

export default store;

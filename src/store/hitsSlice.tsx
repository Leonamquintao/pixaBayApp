import {createSelector, createSlice} from '@reduxjs/toolkit';
import {Hits, RootState} from '../types';

export type HitsListState = {
  hits: Hits[];
  lastSearch: string;
};

const initialState: HitsListState = {
  hits: [],
  lastSearch: '',
};

export const slice = createSlice({
  name: 'hits',
  initialState,
  reducers: {
    addHits(state, {payload}) {
      return {...state, hits: [...payload]};
    },
    addSearch(state, {payload}) {
      return {...state, lastSearch: payload};
    },
    deleteHits(state) {
      return {...state, hits: []};
    },
    clearSearch(state) {
      return {...state, lastSearch: ''};
    },
  },
});

// reducer itself
export default slice.reducer;

// selectors
const hitsSelector = (state: RootState) => state.hits;
export const totalHitsStored = createSelector(hitsSelector, hits => hits.hits);
export const storedLastSearch = createSelector(
  hitsSelector,
  hits => hits.lastSearch,
);

// actions
export const {addHits, addSearch, deleteHits, clearSearch} = slice.actions;

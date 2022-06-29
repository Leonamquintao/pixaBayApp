import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/lib/constants';

export const middlewareList: any = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: {
      ignoredActionPaths: ['payload.payload'],
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

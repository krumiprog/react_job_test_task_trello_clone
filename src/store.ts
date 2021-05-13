import { configureStore } from '@reduxjs/toolkit';
import { save } from 'redux-localstorage-simple';
import cardsReducer from './cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(save({ namespace: 'cards' })),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

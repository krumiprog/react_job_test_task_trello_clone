import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Card {
  id: number;
  content: String;
}

export interface Column {
  id: number;
  title: String;
  cards: Card[];
}

type NewCardPayload = {
  columnIndex: number;
  content: String;
};

const initialState: Column[] = [];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addNewColumn: (state, action: PayloadAction<String>) => {
      state.push({ id: Date.now(), title: action.payload, cards: [] });
    },
    addNewCard: (state, action: PayloadAction<NewCardPayload>) => {
      state[action.payload.columnIndex].cards.push({
        id: Date.now(),
        content: action.payload.content,
      });
    },
    dropCardSameColumn: () => {},
    dropCardOtherColumn: () => {},
  },
});

export const {
  addNewColumn,
  addNewCard,
  dropCardSameColumn,
  dropCardOtherColumn,
} = cardsSlice.actions;

export const selectCount = (state: RootState) => state.cards;

export default cardsSlice.reducer;

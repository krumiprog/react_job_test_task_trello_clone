import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Card {
  id: string;
  content: string;
}

export interface Column {
  id: string;
  title: string;
  cards: Card[];
}

const initialState: Column[] = [];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addNewColumn: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now().toString(),
        title: action.payload,
        cards: [],
      });
    },
    addNewCard: (
      state,
      action: PayloadAction<{
        columnIndex: number;
        content: string;
      }>
    ) => {
      state[action.payload.columnIndex].cards.push({
        id: Date.now().toString(),
        content: action.payload.content,
      });
    },
    dropCardSameColumn: (
      state,
      action: PayloadAction<{
        column: string;
        source: number;
        destination: number;
      }>
    ) => {
      const { column, source, destination } = action.payload;
      const match = state.find(item => item.id === column)?.cards;

      if (match) {
        const item = { ...match[source] };
        match.splice(source, 1);
        match.splice(destination, 0, item);
      }
    },
    dropCardOtherColumn: (
      state,
      action: PayloadAction<{
        columnFrom: string;
        columnTo: string;
        source: number;
        destination: number;
      }>
    ) => {
      const { columnFrom, columnTo, source, destination } = action.payload;
      const matchFrom = state.find(item => item.id === columnFrom)?.cards;
      const matchTo = state.find(item => item.id === columnTo)?.cards;

      if (matchFrom && matchTo) {
        const item = { ...matchFrom[source] };
        matchFrom.splice(source, 1);
        matchTo!.splice(destination, 0, item);
      }
    },
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

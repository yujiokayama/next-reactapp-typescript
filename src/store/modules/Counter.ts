import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  count: number;
};

const initialState: State = {
  count: 0
};

const counterModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        count: state.count + action.payload
      };
    },
    decrementCounter: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        count: state.count - action.payload
      };
    }
  }
});

export const { incrementCounter, decrementCounter } = counterModule.actions;

export default counterModule;

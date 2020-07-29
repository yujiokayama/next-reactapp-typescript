import { createSlice } from '@reduxjs/toolkit';

type State = {
  counter: number;
};

const initialState: State = {
  counter: 0
};

const testModule = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state: State, action) => {
      state.counter++;
    },
    decrementCount: (state: State, action) => {
      state.counter--;
    }
  }
});

export const { incrementCount, decrementCount } = testModule.actions;

export default testModule;

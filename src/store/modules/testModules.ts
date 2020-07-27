import { createSlice } from "@reduxjs/toolkit";

type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

const testModule = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state: State) => {
      state.counter++;
    },
  },
});

export const { addCount } = testModule.actions;

export default testModule;

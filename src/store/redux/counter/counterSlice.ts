//1. import
import { createAppSlice } from "../../createAppSlice"
import type { CounterStateSlice } from "./types"

//4.1
const counterInitialState: CounterStateSlice = {
  count: 0,
}

//2. Slice für Counter
export const counterSlice = createAppSlice({
  //3. Задаём имя под которым будет храниться обьект со значением counter
  name: "COUNTER",
  //4.
  initialState: counterInitialState,
  //5
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count - 1
    }),
  }),
  //6
  selectors: {
    count: (state: CounterStateSlice) => state.count,
  },
})

//7.
export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors

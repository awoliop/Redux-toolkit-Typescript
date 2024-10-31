import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/CounterSlice";
import UserReducer from "../components/Placeholder/PlaceholderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

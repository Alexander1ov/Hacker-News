import { configureStore } from "@reduxjs/toolkit";

import newsSlice from "./news/newsSlice";
import commentsSlice from "./commentsSlice/commentsSlice";


const store = configureStore({
  reducer: {
    news: newsSlice,
    comments: commentsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

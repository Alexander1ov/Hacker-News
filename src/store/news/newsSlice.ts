import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import axios from "axios";

import { News, NewsState } from "./newsTypes";

export const fetchNews = createAsyncThunk<News[], undefined, { rejectValue: string }>( //3 rejectValue параметр - AsyncThunkConfig
  "news/fetchNews",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");
      const data = response.data.slice(0, 200);

      const results = data.map((id: number) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
      const resultData = await Promise.all(results)

      return await Promise.all(resultData.map((item) => item.data))
    } catch (e) {
      return rejectWithValue("Failed to load news list")
    }
  });

const initialState: NewsState = {
  list: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })

      // обьеденяем все rejected в один, чтобы не писать для каждого:
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false
      })
  },
});

export default newsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}
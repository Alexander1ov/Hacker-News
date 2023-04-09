import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Answer, Comments, CommentsState } from "./commentsTypes";

export const fetchComments = createAsyncThunk<Comments[], Array<number>, { rejectValue: string }>( //3 rejectValue параметр - AsyncThunkConfig
  "comments/fetchComments",
  async function (kids, { rejectWithValue }) {
    try {
      const result = kids.map((item:number)=> axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`))
      const resultData = await Promise.all(result);
      return  await Promise.all(resultData.map((item) => item.data))

    } catch (e) {
      return rejectWithValue("Failed to load comments list")
    }
  });

  export const fetchAnswer = createAsyncThunk<Answer[], Array<number>, { rejectValue: string }>( //3 rejectValue параметр - AsyncThunkConfig
  "comments/fetchAnswer",
  async function (kids, { rejectWithValue }) {
    try {
      const result = kids.map((item:number)=> axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`))
      const resultData = await Promise.all(result);
      return  await Promise.all(resultData.map((item) => item.data))

    } catch (e) {
      return rejectWithValue("Failed to load comments list")
    }
  });

const initialState: CommentsState = {
  list: [],
  answer:[],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchComments.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchAnswer.fulfilled, (state, action) => {
        state.answer = action.payload;
        state.loading = false;
      })

      // обьеденяем все rejected в один, чтобы не писать для каждого:
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false
      })
  },
});

// export const { addNews } = commentsSlice.actions;
export default commentsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}
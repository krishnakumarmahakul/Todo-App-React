import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';





export const fetchUser=createAsyncThunk(
  "user/getuser",
    async()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const user= await response.json();
    return user;
   }
  


)
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;






























// this is the counter slice
// const initialState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

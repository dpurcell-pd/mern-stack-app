// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// const user = JSON.parse(localStorage.getItem('user'));

// const initialState = {
//     user: null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: ''
// }

// //register user
// export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
//     try {
//         return await authService.register();
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message);

//     }
// })

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         reset: (state) => {
//             state.isLoading = false
//             state.isSuccess = false
//             state.isError = false
//             state.message = ''
//         }
//     },
//     extraReducers: () => {}
// });

// export const {reset} = authSlice.actions;
// export default authSlice.reducer;
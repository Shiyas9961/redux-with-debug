import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async ( id, thunkAPI)=>{
    try{
        const user = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)

        return user.data
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

const apiSlice = createSlice({
    name : "user",
    initialState : {
        users : [],
        isLoading : false,
        errorMsg : ''
    },extraReducers : (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.users.push(action.payload)
            state.isLoading = false
        }).addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false
            state.errorMsg = action.error
        })
    }
})

export default apiSlice.reducer
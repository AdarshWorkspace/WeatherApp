import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const CurrentWeatherFetch = createAsyncThunk("CurrentWeatherFetch", async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=642de5986b98ab530860513281829787&units=metric`);
    return response.json();
});
const CurrentWeatherSlice = createSlice({
    name: 'currentWeatherData',
    initialState: {
        isLoading: "false",
        data: null,
        isError: "false",
    },
   

    extraReducers : (builder)=> {
        builder.addCase(CurrentWeatherFetch.pending, (state)=>{
            state.isLoading = true;
        }),
        builder.addCase(CurrentWeatherFetch.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        }),
        builder.addCase(CurrentWeatherFetch.rejected, ( state , action )=>{
            state.isError= true;
            console.log("error = ", action.payload)
        })
    }
})
export default CurrentWeatherSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSlice from "./slice/CurrentWeatherSlice";
export const store = configureStore({
    reducer : {
        currentWeatherData : CurrentWeatherSlice
    }
})
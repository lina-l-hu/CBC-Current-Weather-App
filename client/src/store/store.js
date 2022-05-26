import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../reducers/locationReducer";
import weatherReducer from "../reducers/weatherReducer";

const store = configureStore({
    reducer: { location: locationReducer, 
                weather: weatherReducer
            }
});

export default store;
//Redux data store

import { configureStore } from "@reduxjs/toolkit";
import coordinatesReducer from "../reducers/coordinatesReducer";
import weatherReducer from "../reducers/weatherReducer";
import cityReducer from "../reducers/cityReducer"

const store = configureStore({
    reducer: {  coordinates: coordinatesReducer, 
                city: cityReducer,
                weather: weatherReducer
            }
});

export default store;
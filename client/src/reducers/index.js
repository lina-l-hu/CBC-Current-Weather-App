import locationReducer from "./getLocation";
import weatherReducer from "./getWeather";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    location: locationReducer, 
    weather: weatherReducer
})

export default rootReducer;
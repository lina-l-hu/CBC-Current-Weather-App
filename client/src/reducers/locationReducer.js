import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    coordinatesStatus: "loading", //possible statuses: loading, idle, error
    coordinates: null,
    cityStatus: "loading", //possible statuses: loading, idle, error
    nearestCity: null,
    error: null
}

// const locationReducer = createReducer(initialState, (builder) => {
//     builder.addCase("RETRIEVE_COORDINATES", (state, action) => {

//     })
// })
const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RETRIEVE_COORDINATES" : {
            return {
                coordinatesStatus: "idle", 
                coordinates: action.coordinates
            }
        }

        case "RETRIEVE_COORDINATES_ERROR" : {
           return {
                coordinatesStatus: "error",
                error: action.error
           }
        }

        case "RETRIEVE_CITY" : {
            return {
                cityStatus: "idle", 
                nearestCity: action.nearestCity
            }
        }

        case "RETRIEVE_CITY_ERROR" : {
            return {
                 cityStatus: "error",
                 error: action.error
            }
         }

        default: {
            return state;
        }
    }
}

export default locationReducer;
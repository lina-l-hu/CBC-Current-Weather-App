//reducer to manage city data fetched from Reverse Geocoding OpenWeather API

const initialState = {
    cityStatus: "loading", //possible statuses: loading, idle, error
    nearestCity: null,
    country: null,
    error: null
}

const cityReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case "RETRIEVE_CITY" : {
            return {
                cityStatus: "idle", 
                nearestCity: action.nearestCity, 
                country: action.country
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

export default cityReducer;
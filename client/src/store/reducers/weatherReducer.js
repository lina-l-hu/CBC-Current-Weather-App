//reducer to manage weather data fetched from GraphQL Weather API provided

const initialState = {
    weatherStatus: "loading", //possible status: loading, idle, error
    weather: null,
    error: null
}

const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case "RETRIEVE_WEATHER" : {
            return {
                weatherStatus: "idle", 
                weather: action.weather
            }
        }

        case "RETRIEVE_WEATHER_ERROR" : {
           return {
                weatherStatus: "error",
                error: action.error
           }
        }

        default: {
            return state;
        }
    }
}

export default weatherReducer;
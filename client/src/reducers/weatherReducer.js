const initialState = {
    status: "loading", //possible status: loading, idle, error
    weather: null,
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "weather-loaded" : {
            return {
                status: "idle", 
                coordinates: action.weather
            }
        }

        case "loading-weather-error" : {
           return {
                status: "error"
           }
        }

        default: {
            return state;
        }
    }
}

export default weatherReducer;
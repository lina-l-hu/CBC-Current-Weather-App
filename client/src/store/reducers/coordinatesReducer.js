//reducer to manage current coordinates data fetched from HTML geolocation


const initialState = {
    coordinatesStatus: "loading", //possible statuses: loading, idle, error
    coordinates: null,
    error: null
}

const coordinatesReducer = (state = initialState, action) => {

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

        default: {
            return state;
        }
    }
}

export default coordinatesReducer;
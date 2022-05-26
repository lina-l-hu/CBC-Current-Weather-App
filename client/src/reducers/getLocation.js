const initialState = {
    status: "loading", //possible status: loading, idle, error
    coordinates: null,
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "coordinates-loaded" : {
            return {
                status: "idle", 
                coordinates: action.coordinates
            }
        }

        case "loading-coordinates-error" : {
           return {
                status: "error"
           }
        }

        default: {
            return state;
        }
    }
}

export default locationReducer;
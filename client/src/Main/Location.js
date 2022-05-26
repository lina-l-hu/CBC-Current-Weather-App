import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const Location = () => {
    const { REACT_APP_KEY } = process.env;
    const coordinatesStatus = useSelector((state) => state.location.coordinatesStatus);
    const coordinates = useSelector((state) => state.location.coordinates);
    const cityStatus = useSelector((state) => state.location.cityStatus);
    const nearestCity = useSelector((state) => {
        console.log("state", state);
        return state.location.nearestCity;});
    const error = useSelector((state) => state.location.error);
    
    const dispatch = useDispatch();

    //function to get current location in geographical coordinates
    const getLocation = async () => {
        try {
            await navigator.geolocation.getCurrentPosition((position) => {
                const coordinates = {
                    lat: position.coords.latitude, 
                    long: position.coords.longitude
                };

                dispatch({
                    type: "RETRIEVE_COORDINATES",
                    coordinates: coordinates
                });

                return coordinates;
            }); 

        }       

        catch (err) {
            dispatch({
                type: "RETRIEVE_COORDINATES_ERROR",
                error: "Geolocation is not supported by this browser."

            });
        }
    }

    //function to get city closest to the current geographical coordinates
    const getNearestCity = async (coordinates) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.lat}&lon=${coordinates.long}&limit=1&appid=${REACT_APP_KEY}`, {
                method: "GET", 
            })

            const data = await response.json();
            if (data.length === 1) {
                console.log("data", data);
                console.log("name", data[0].name);
                dispatch({
                    type: "RETRIEVE_CITY",
                    nearestCity: data[0].name
                })
            }
            else (
                dispatch ({
                    type: "RETRIEVE_CITY_ERROR",
                    error: "Could not find the closest city."
                })
            )
        }

        catch (err) {
            dispatch ({
                type: "RETRIEVE_CITY_ERROR",
                error: "Could not find the closest city."
            })
        }
    }

    useEffect(() => {
        (async () => {
            const coords = await getLocation();
            await getNearestCity(coords);
        })();

    }, []);


    if (coordinatesStatus === "loading" || cityStatus === "loading") {
        return (
            <Wrapper>
                <p>loading current position...</p>
            </Wrapper>
        )
    }

    if (coordinatesStatus === "error" || cityStatus === "error") {
        return (
            <Wrapper>
                <p>{error}</p>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
        <h2>your location</h2>
            {/* {(coordinatesStatus === "idle" && cityStatus == "idle" && */}
            <>
            <p>coordinates: {"(" + coordinates.lat + ", " + coordinates.long + ")"}</p>
            <p>closest city: {nearestCity}</p>
            </>
            {/* )} */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

export default Location;
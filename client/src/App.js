import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Weather from "./components/Weather"
import LoadingComponent from "./components/LoadingComponent";

function App() {

    const { REACT_APP_KEY } = process.env;
    const dispatch = useDispatch();
    const city = useSelector((state) => state.city.nearestCity);
    const country = useSelector((state) => state.city.country);
    const weatherStatus = useSelector((state) => state.weather.weatherStatus);
    
    //function to fetch weather information by current city from GraphQL Weather API
    const getWeather = async () => {
        try {
            fetch('http://localhost:4000', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: `
                    query {
                        getCityByName(name: "${city}", country: "${country}", config: {units:metric, lang:en}) {
                        id
                        name
                        country
                        coord {
                            lon
                            lat
                        }
                        weather {
                            summary {
                            title
                            description
                            icon
                            }
                            temperature {
                            actual
                            feelsLike
                            min
                            max
                            }
                            wind {
                            speed
                            deg
                            }
                            clouds {
                            all
                            visibility
                            humidity
                            }
                            timestamp
                        }
                        }
                    }` 
                }),
                })
            .then(res => res.json())
            .then(data => {
                if (data.data.getCityByName === null) {
                    dispatch({
                        type: "RETRIEVE_WEATHER_ERROR",
                        error: "Could not retrieve weather conditions."
                    })
                }
                else {
                    dispatch({
                    type: "RETRIEVE_WEATHER",
                    weather: data.data.getCityByName
                    })
                }
            });
        }
  
        catch (err) {
            dispatch({
                type: "RETRIEVE_WEATHER_ERROR",
                error: "Could not retrieve weather conditions."
            })
        }
    }

    //function to get city closest to the current geographical coordinates
    const getNearestCity = async (coords) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.long}&limit=1&appid=${REACT_APP_KEY}`, {
                method: "GET",    
            })

            const data = await response.json();

            if (data.length === 1) {
                dispatch({
                    type: "RETRIEVE_CITY",
                    nearestCity: data[0].name,
                    country: data[0].country
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
                error: "Could not find the closest city due to server error."
            })
        }
    }

    //function to get current location in geographical coordinates with HTML geolocation, which is used
    //to fetch the nearest city and country with the OpenWeather Reverse Geocoding API
    const getLocation = async () => {
        try {
            await navigator.geolocation.getCurrentPosition((position) => {
                const coords = {
                    lat: position.coords.latitude, 
                    long: position.coords.longitude
                };

                dispatch({
                type: "RETRIEVE_COORDINATES",
                coordinates: coords
                });
                
                getNearestCity(coords);
            }); 
        }       

        catch (err) {
            dispatch({
                type: "RETRIEVE_COORDINATES_ERROR",
                error: "Geolocation is not supported by this browser."

            });
        }
    }

    //call data fetches on page load
    useEffect(() => {
        (async () => {
            await getLocation();
            getWeather();
        })();   
    }, [city]);
  
    return (
        <Page>
            <GlobalStyles />
            <Header />
            {(weatherStatus === "idle") ?  (
                <Weather getWeather={getWeather}/>
            ) : (<LoadingComponent />)
            }
        </Page>
    );
}

const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;

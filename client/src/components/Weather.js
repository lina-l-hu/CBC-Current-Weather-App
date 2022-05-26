//Main component of the page displaying the weather details for the current city

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import RefreshButton from "./RefreshButton";
import LoadingComponent from "./LoadingComponent";

const Weather = ({getWeather}) => {
    const currentWeather = useSelector((state) => state.weather.weather);
    const status = useSelector((state) => state.weather.weatherStatus);

    if (status === "loading") {
        return (
            <Wrapper>   
                <LoadingComponent />
            </Wrapper>
        )
    }

    return (
        <Wrapper>   
            <Content>
            <Heading>
                <h1>{currentWeather.name + ", " + currentWeather.country}</h1>
            </Heading>
            <Heading>
                <p>updated on {moment(Date.now()).format('lll')}</p>
            </Heading>
            <Summary>
                <Image>
                    <img src={`http://openweathermap.org/img/wn/${currentWeather.weather.summary.icon}@2x.png`} alt={currentWeather.weather.summary.description}/>
                </Image>
                <Text>
                    <ActualTemp>
                        <h1>{Math.round(currentWeather.weather.temperature.actual)}°C</h1>
                    </ActualTemp>
                    <Description>
                        <h3>{currentWeather.weather.summary.description}</h3>
                    </Description>
                    <FeelsLike>
                        <h4>feels like {Math.round(currentWeather.weather.temperature.feelsLike)}°C</h4>
                    </FeelsLike>
                </Text>
            </Summary>
            <Info>
                <h5><span>min temp&nbsp;&nbsp;</span>{Math.round(currentWeather.weather.temperature.min)}°C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>max temp&nbsp;&nbsp;</span>{Math.round(currentWeather.weather.temperature.min)}°C</h5>
            </Info>
            <Info>
                <h5><span>wind speed&nbsp;&nbsp;</span>{Math.round(currentWeather.weather.wind.speed)} km/h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>degree&nbsp;&nbsp;</span>{Math.round(currentWeather.weather.wind.deg)}°</h5>
            </Info>
            <Info>
                <h5><span>humidity&nbsp;&nbsp;</span>{Math.round(currentWeather.weather.clouds.humidity)}%</h5>
            </Info>
            </Content>
            <RefreshButton getWeather={getWeather}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    border-radius: 30px;
    
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(111,140,251,1) 74%);
    box-shadow: 3px 3px 5px 3px var(--color-secondary);

    div {
        margin: 10px 0;
    }
`;

const Content = styled.div`
    margin: 0 auto;

    div {
        margin: 10px 0;
    }
`;

const Heading = styled.div`
    h1 {
        font-weight: bold;
    }
`;

const Info = styled.div`
    display: flex;
    justify-content: center;

    span {
        font-weight: bold;
    }
`;

const Summary = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
`;

const Image = styled.div`
    padding: 10px;
`;

const Text = styled.div`
    margin-left: 15px;
`;

const ActualTemp = styled.div`
    margin: 10px 0;
`;

const Description = styled.div`
    h3 {
        font-style: italic;
    }
`;

const FeelsLike = styled.div`
    padding-top: 12px;
`;

export default Weather;
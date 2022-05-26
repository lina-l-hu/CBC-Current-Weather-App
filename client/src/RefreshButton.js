//Button to call the fetch function to obtain current weather data

import styled from "styled-components";

const RefreshButton = ({getWeather}) => {
    const handleRefresh = () => {
        getWeather();
    }

    return (
        <Wrapper>
            <button onClick={handleRefresh}>refresh</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;

    button {
        font-size: 20px;
        padding: 10px 20px;
    }
`;

export default RefreshButton;
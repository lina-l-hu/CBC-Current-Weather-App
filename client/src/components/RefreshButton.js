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
        font-size: 23px;
        padding: 15px 25px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
    }
`;

export default RefreshButton;
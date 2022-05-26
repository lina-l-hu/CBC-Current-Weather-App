import styled from "styled-components";
import RefreshButton from "./RefreshButton";
import Location from "./Location";
import Weather from "./Weather";

const Main = () => {
    return (
        <Wrapper>
            <Location />
            <Weather />
            <RefreshButton />
        </Wrapper>
    );
}

const Wrapper = styled.div`
`

export default Main;
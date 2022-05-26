import styled from "styled-components";

const RefreshButton = () => {

    const handleRefresh = () => {
        
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
    margin: 20px;

    button {
        font-size: 30px;
        padding: 20px;
    }
`;

export default RefreshButton;
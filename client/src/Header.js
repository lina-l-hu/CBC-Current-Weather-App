import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <h1>current weather</h1>
        </Wrapper>
    ); 
}

const Wrapper = styled.div`
    margin: 30px;
`;


export default Header;
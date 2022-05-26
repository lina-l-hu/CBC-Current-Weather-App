//Header containing page title

import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <h1>your current weather</h1>
        </Wrapper>
    ); 
}

const Wrapper = styled.div`
    margin: 30px;

    h1 { 
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 36px;
        color: var(--color-main);
    }
`;

export default Header;
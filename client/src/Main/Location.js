import styled from "styled-components";

const Location = () => {

    const showPosition = (position) => {
        return {
            lat: position.coords.latitude, 
            long: position.coords.longitude
        };
    }

    const getLocation = () => {
        if (navigator.geolocation) {
          return navigator.geolocation.getCurrentPosition(showPosition); 
        }
        else { 
          return "Geolocation is not supported by this browser.";
        }
      }


    const coordinates = getLocation();
    console.log("coord", coordinates);

    return (
        <Wrapper>
            <h2>your location</h2>
            <p>coordinates: {coordinates}</p>
            <p>closest city:</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

export default Location;
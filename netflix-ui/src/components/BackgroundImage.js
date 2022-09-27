import styled from "styled-components";

import backgroundImage from "../assets/login.jpg";

const BackgroundImage = () => {
  return(
    <Container>
      <img src={backgroundImage} alt="background" />
    </Container>
  )
};

export default BackgroundImage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
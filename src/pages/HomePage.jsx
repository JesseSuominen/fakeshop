import styled from "styled-components";

const StyledHomeContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const HomePage = () => {
  return (
    <>
      <StyledHomeContainer>
        <h2>Welcome to</h2>
        <h1>🛒 F A K E S H O P 🏪</h1>
        <p>A SPA made with React</p>
        <p>as part of the Advanced Web Programming Course.</p>
        <p>Made by Jesse Suominen</p>
      </StyledHomeContainer>
      <br />
      <StyledHomeContainer>
        <p>This site is Powered by GitHub Workflows for automated CI/CD</p>
        <p>Hosted on Vercel</p>
      </StyledHomeContainer>
    </>
  );
};

export default HomePage;

import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const NotFound = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <NavBar />

      <Wrapper>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not-found"
        />
        <div style={{ padding: "10px", textAlign: "center" }}>
          <h1>Page Not Found</h1>
          <p>We're sorry, the page you requested could not be found</p>
        </div>
      </Wrapper>
    </div>
  );
};

const Img = styled.img`
  width: 25%;
  @media (max-width: 426px) {
    width: 70%;
  }
`;

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  p {
    color: white;
  }
`;

export default NotFound;

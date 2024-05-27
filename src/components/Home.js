import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { Button } from "antd";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }
  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Heading>Find The Job that Fits Your Life</Heading>
        <Text>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </Text>
        <Link to="/jobs">
          <Button type="primary" style={{ width: "150px" }}>
            Find jobs
          </Button>
        </Link>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png");
  height: 100vh;
  background-size: cover;

  h1,
  p {
    color: white;
  }
`;

const Heading = styled.h1`
  font-size: 50px;
`;

const Text = styled.p`
  font-size: 30px;
`;

const Content = styled.div`
  width: 40%;
  margin: 5%;
`;

export default Home;

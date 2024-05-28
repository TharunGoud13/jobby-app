import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };
  return (
    <Wrapper>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="app=logo"
          style={{ height: "50px" }}
        />
      </Link>
      <Tabs>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/jobs">
          <h1>Jobs</h1>
        </Link>
      </Tabs>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Wrapper>
  );
};

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  font-size: 20px;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }

  h1 {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  background-color: #272727;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  a {
    color: white;
    text-decoration: none;
  }
`;

export default NavBar;

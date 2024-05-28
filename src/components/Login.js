import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Form } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { CloseOutlined } from "@ant-design/icons";

const Login = () => {
  const jwtToken = Cookies.get("jwt_token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showData, setShowData] = useState(false);

  const navigate = useNavigate();

  const url = "https://apis.ccbp.in/login";

  const handleLogin = async () => {
    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      navigate("/", { replace: true });
      Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
    } else {
      const error = document.getElementById("error_text");
      error.textContent = data.error_msg;
    }

    console.log(response);
  };

  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      <div>
        {showData ? (
          <CardContainer>
            <div>
              <p>USERNAME: rahul</p>
              <p>PASSWORD: rahul@2021</p>
            </div>
            <div
              style={{
                display: "flex",
                position: "relative",
                left: "85%",
                bottom: "85px",
              }}
            >
              <CloseOutlined
                style={{ color: "white", fontSize: "25px" }}
                onClick={() => setShowData(false)}
              />
            </div>
          </CardContainer>
        ) : (
          <Button
            type="primary ghost"
            onClick={() => setShowData(true)}
            style={{ marginBottom: "10px" }}
          >
            Check User Credentials
          </Button>
        )}
        <LoginForm>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            style={{ height: "40px" }}
            alt="app-logo"
          />
          <Form
            style={{ maxWidth: 600, maxHeight: 600 }}
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item name="Username" required style={{ marginTop: "20px" }}>
              <label htmlFor="input">USERNAME</label>
              <InputEl
                id="input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ required: true, message: "Please Enter Password" }]}
            >
              <label htmlFor="password" required>
                PASSWORD
              </label>
              <Input.Password
                id="password"
                style={{ backgroundColor: "#e2e8f0", color: "#64748b" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          </Form>

          <Button
            type="primary"
            onClick={handleLogin}
            style={{ width: "100%" }}
          >
            Submit
          </Button>
          <p id="error_text" style={{ color: "red" }}></p>
        </LoginForm>
      </div>
    </Wrapper>
  );
};

const InputEl = styled(Input)`
  background-color: #e2e8f0;
  color: #64748b;
`;

const Logo = styled.img`
  text-align: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #272727;
  height: 300px;
  // width: 300px;
  border-radius: 5px;
  padding: 20px;
  @media (min-width: 769px) {
    //   text-align: center;
    padding: 20px;
    height: 300px;
  }
`;

const CardContainer = styled.div`
  background-color: #272727;
  padding: 5px;

  border-radius: 4px;
  margin-bottom: 10px;
  p {
    color: white;
  }
`;

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  label {
    color: #475569;
    font-weight: 600;
  }
`;

export default Login;

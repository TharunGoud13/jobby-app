import React, { useState } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import Avatar from "antd/es/avatar/avatar";
import axios from "axios";
import {
  StarOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [data, setData] = useState([]);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }
  const url = "https://apis.ccbp.in/jobs";

  axios
    .get(url, { headers: { Authorization: `Bearer ${jwtToken}` } })
    .then((response) => {
      setData(response.data);
    });

  return (
    <Wrapper>
      <NavBar />
      <JobsWrapper>
        <ProfileContainer>
          <ProfileCard>
            <Avatar size={64}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
                alt="user"
              />
            </Avatar>
            <h1>Tharun Goud</h1>
            <p>Junior Front-End Developer</p>
          </ProfileCard>
        </ProfileContainer>

        <JobsContainer>
          {console.log("data", data)}
          {data.jobs?.map((item) => (
            <Link to={`/jobs/${item?.id}`}>
              <JobCard key={item.id}>
                <RoleContainer>
                  <img
                    src={item?.company_logo_url}
                    alt="company-logo"
                    style={{ height: "100px" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>{item.title}</h2>
                    <br />
                    <div style={{ marginTop: "-32px" }}>
                      <StarOutlined
                        style={{
                          backgroundColor: "orange",
                          padding: "10px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </RoleContainer>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "30px",
                  }}
                >
                  <div>
                    <EnvironmentOutlined />
                    <span>{item.location}</span>
                  </div>
                  <div>
                    <MailOutlined />
                    <span>{item.employment_type}</span>
                  </div>
                </div>
                <p>{item.package_per_annum}</p>
                <hr style={{ color: "white" }} />
                <div>
                  <p>{item.title}</p>
                  <p>{item.job_description}</p>
                </div>
              </JobCard>
            </Link>
          ))}
        </JobsContainer>
      </JobsWrapper>
    </Wrapper>
  );
};

const JobsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const JobsContainer = styled.div`
  gap: 10px;
  margin: 10px;
  width: 50%;

  @media (max-width: 768px) {
    width: 75%;
  }
`;

const RoleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const JobCard = styled.div`
  background-color: #121212;
  padding: 20px;
  margin: 10px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const ProfileCard = styled.div`
  background-color: gray;
  padding: 10px;
  width: 80%;
  border-radius: 4px;
  // position: sticky;
  // top: 20%;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ProfileContainer = styled.div`
  width: 30%;
  margin: 2%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 3%;
  }
`;

const Wrapper = styled.div`
  background-color: black;

  h1,
  h2,
  span {
    color: white;
  }
  p {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  span {
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;

export default Jobs;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import {
  StarOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import SimilarJobs from "./SimilarJobs";

const JobDesc = () => {
  const { id } = useParams();
  const jwtToken = Cookies.get("jwt_token");
  const [data, setData] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);

  const url = `https://apis.ccbp.in/jobs/${id}`;

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${jwtToken}` } })
      .then((response) => {
        setData(response.data);
        setJobDetails(response.data.job_details);
      });
  }, [url, jwtToken]);

  console.log("data", data);
  //   console.log("len", data);
  return (
    <Wrapper>
      <NavBar />
      <JobsWrapper>
        <JobsContainer>
          <JobCard key={jobDetails.id}>
            <RoleContainer>
              <img
                src={jobDetails?.company_logo_url}
                alt="company-logo"
                style={{ height: "100px" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>{jobDetails.title}</h2>
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
                  <span>{jobDetails.rating}</span>
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
                <span>{jobDetails.location}</span>
              </div>
              <div>
                <MailOutlined />
                <span>{jobDetails.employment_type}</span>
              </div>
            </div>
            <p>{jobDetails.package_per_annum}</p>
            <hr style={{ color: "white" }} />
            <div>
              <p>{jobDetails.title}</p>
              <p>{jobDetails.job_description}</p>
            </div>
            <div>
              <h1>Skills</h1>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                {jobDetails.skills?.map((item) => (
                  <div key={item.id} style={{ display: "flex" }}>
                    <img
                      src={item.image_url}
                      alt="job-details"
                      style={{ height: "60px" }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1>Life at Company</h1>
              <Life>
                <p>{jobDetails.life_at_company?.description}</p>
                <img
                  src={jobDetails.life_at_company?.image_url}
                  alt="company-scene"
                  style={{ height: "150px", borderRadius: "4px" }}
                />
              </Life>
            </div>
          </JobCard>
        </JobsContainer>
      </JobsWrapper>
      <SimilarJobs data={data?.similar_jobs} />
    </Wrapper>
  );
};

const Life = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const JobsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const JobsContainer = styled.div`
  gap: 10px;
  margin: 10px;
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 80%;
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

export default JobDesc;

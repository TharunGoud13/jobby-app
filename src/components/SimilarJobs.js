import React from "react";
import styled from "styled-components";
import {
  StarOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SimilarJobs = ({ data }) => {
  return (
    <Wrapper>
      <h1 style={{ textAlign: "center" }}>Similar Jobs</h1>
      <JobWrapper>
        <>
          {data?.length > 0 &&
            data.map((item) => (
              <JobCard>
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
                <h1>Description</h1>
                <p>{item.job_description}</p>
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
              </JobCard>
            ))}
        </>
      </JobWrapper>
    </Wrapper>
  );
};

const SimilarJobsEL = styled.div`
  margin: 20px;
  width: 200px;
`;

const JobWrapper = styled.div`
  display: flex;
`;

const JobCard = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 10px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: black;
  h1 {
    color: white;
  }
`;

const RoleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default SimilarJobs;

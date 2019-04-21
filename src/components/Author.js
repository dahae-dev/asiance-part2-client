import React from "react";
import styled from "styled-components";

const Container = styled.div`
  float: right;
  display: flex;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const Role = styled.div``;

const Location = styled.div``;

const Author = () => {
  return (
    <Container>
      <Avatar src="https://s3.ap-northeast-2.amazonaws.com/asiance-coding-challenge/girl.png" />
      <Profile>
        <Name>name</Name>
        <Role>role</Role>
        <Location>location</Location>
      </Profile>
    </Container>
  );
};

export default Author;

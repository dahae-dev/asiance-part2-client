import React from "react";
import styled from "styled-components";
import { IoMdPricetags } from "react-icons/io";

import Author from "./Author";

const Container = styled.div`
  width: 86%;
  margin: 16px auto;
  background-color: #fff;
  padding: 48px 32px;
`;

const PostHeader = styled.div`
  width: 60%;
`;

const PostTitle = styled.div`
  font-weight: 800;
  font-size: 36px;
`;

const PostDate = styled.div`
  color: #787878;
  font-size: 20px;
  padding: 4px 0;
`;

const Tags = styled.div`
  padding: 20px 0;
  font-size: 18px;
  font-weight: 300;
`;

const BodyContainer = styled.div`
  display: flex;
`;

const PostImage = styled.div`
  width: 100%;
  height: auto;
  flex: 1;
`;

const PostBody = styled.div`
  flex: 3;
  padding: 0 24px;
  font-size: 20px;
`;

const Post = () => {
  return (
    <Container>
      <Author />
      <PostHeader>
        <PostTitle>title</PostTitle>
        <PostDate>Created</PostDate>
        <PostDate>Updated</PostDate>
        <Tags>
          <IoMdPricetags />
          tags
        </Tags>
      </PostHeader>
      <BodyContainer>
        <PostImage>
          <img src="https://s3.ap-northeast-2.amazonaws.com/asiance-coding-challenge/image1.jpg" width="100%" />
        </PostImage>
        <PostBody>body</PostBody>
      </BodyContainer>
    </Container>
  );
};

export default Post;

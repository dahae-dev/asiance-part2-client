import React from "react";
import styled from "styled-components";
import { IoMdPricetags } from "react-icons/io";

import Author from "./Author";

const Container = styled.div`
  width: 86%;
  margin: 16px auto;
  background-color: #fff;
  padding: 48px 32px;

  @media screen and (max-width: 600px) {
    width: 96%;
  }
`;

const PostHeader = styled.div`
  width: 60%;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
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

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 992px) {
    padding: 24px 0;
  }
`;

const Post = ({ title, created_at, updated_at, tags, image_url, body, author }) => {
  const created_date = created_at.split("T")[0];
  const created_time = created_at.split("T")[1].slice(0, 8);
  const updated_date = updated_at.split("T")[0];
  const updated_time = updated_at.split("T")[1].slice(0, 8);

  return (
    <Container>
      <Author author={author} />
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <PostDate>Created {`${created_date} ${created_time}`}</PostDate>
        <PostDate>Updated {`${updated_date} ${updated_time}`}</PostDate>
        <Tags>
          <IoMdPricetags />
          {tags}
        </Tags>
      </PostHeader>
      <BodyContainer>
        <PostImage>
          <img src={image_url} alt={title} width="100%" />
        </PostImage>
        <PostBody>{body}</PostBody>
      </BodyContainer>
    </Container>
  );
};

export default Post;

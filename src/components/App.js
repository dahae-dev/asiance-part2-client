import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import Layout from "./Layout";
import Post from "./Post";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700,800|Staatliches');

    * { 
      box-sizing: border-box;
      margin:0;
      padding: 0; 
    }

    body {
      font-family: "Raleway", sans-serif;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }

    .style {
      color: #787878;
      font-size: 20px; 
      margin: 4px 0; 
      cursor: pointer;
    }

    .active {
      text-decoration: underline;
    }
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  color: #787878;
  font-size: 20px;
  padding: 4px 0;
`;

const PageNum = styled.div`
  padding: 0 16px;
  cursor: pointer;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const countResult = await axios.get("http://localhost:5000/count");
      const total = countResult.data.count;
      const page = Math.ceil(total / 5);
      setPageCount(page);

      const postResult = await axios.get("http://localhost:5000/posts/1");
      setPosts(postResult.data.posts);
    };
    fetchData();
  }, []);

  const handlePagination = async (e, ...args) => {
    const page = !!args.length ? args[0] : e.target.textContent;
    const result = await axios.get(`http://localhost:5000/posts/${page}`);
    setPosts(result.data.posts);
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        {posts.map((post, index) => {
          const { title, created_at, updated_at, tags, image_url, body, Author } = post;
          return (
            <Post
              key={index}
              title={title}
              created_at={created_at}
              updated_at={updated_at}
              tags={tags}
              image_url={image_url}
              body={body}
              author={Author}
            />
          );
        })}
        <Pagination>
          <FaAngleDoubleLeft
            className="style"
            onClick={e => {
              handlePagination(e, 1);
              setPage(1);
            }}
          />
          <Pagination>
            {Array(pageCount)
              .fill(1)
              .map((v, i) => (
                <PageNum
                  key={i}
                  className={page === i + 1 ? "active" : ""}
                  onClick={e => {
                    handlePagination(e);
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </PageNum>
              ))}
          </Pagination>
          <FaAngleDoubleRight
            className="style"
            onClick={e => {
              handlePagination(e, pageCount);
              setPage(pageCount);
            }}
          />
        </Pagination>
      </Layout>
    </>
  );
};

export default App;

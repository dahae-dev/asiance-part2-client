import React, { useState, useEffect } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";

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
`;

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/posts");
      setPosts(result.data);
    };
    fetchData();
  }, []);

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
      </Layout>
    </>
  );
};

export default App;

import React from "react";
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
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Post />
      </Layout>
      ;
    </>
  );
};

export default App;

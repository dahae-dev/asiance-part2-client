import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import Layout from "./Layout";

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
      <Layout>Hello, Asiance!</Layout>;
    </>
  );
};

export default App;

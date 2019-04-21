import React from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  text-align: center;
  margin-top: 36px;
  font-size: 36px;
  font-weight: 700;
  font-family: "Staatliches", cursive;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;

  .selected {
    color: #000;
    text-decoration: underline;
  }
`;

const NavMenu = styled.span`
  color: #787878;
  padding: 12px;
  font-size: 20px;

  &:hover,
  &:active,
  &:visited {
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 48px;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 24px 0;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <>
      <PageTitle>THE BLOG</PageTitle>
      <NavContainer>
        <NavMenu className="selected">POSTS</NavMenu>
        <NavMenu>ABOUT US</NavMenu>
      </NavContainer>
      <Container>
        {children}
        <Footer>© 2004 - 2019 The blog. All rights reserved.</Footer>
      </Container>
    </>
  );
};

export default Layout;

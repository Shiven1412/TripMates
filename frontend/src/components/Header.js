import React from "react";
import styled from "styled-components";

// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-right: 30px;
  position: fixed; /* Make the header fixed */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4; /* Ensure it overlays other content */
  background: transparent; /* Fully transparent background */
  color: #fff;
  backdrop-filter: blur(2px); /* Optional: Adds a blur effect */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    margin: 0 15px;
    color: #fff; /* White text color */
    text-decoration: none; /* Remove underline */
    font-size: 18px; /* Adjust font size */
    font-weight: 500; /* Medium font weight */
    transition: color 0.3s ease; /* Smooth transition for hover effect */

    &:hover {
      color: #00d8ff; /* Change color on hover */
    }
  }
`;

// Component
function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <a href="/Home" style={{ color: "#00d8ff", textDecoration: "none", fontWeight: "bold" }}>
          TripMates
        </a>
      </Logo>
      <Nav>
        <a href="/Home">Home</a>
        <a href="/login">Login</a>
        <a href="/survey">Survey</a>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
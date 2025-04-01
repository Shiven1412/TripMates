import React from "react";
import styled from "styled-components";

// Styled component
const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// Component
function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2025 TripMates. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;
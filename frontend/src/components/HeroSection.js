import React from "react";
import styled from "styled-components";

// Styled components
const HeroWrapper = styled.div`
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(to bottom, #000, #333);
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const CTAButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ddd;
  }
`;

// Component
function HeroSection() {
  return (
    <HeroWrapper>
      <HeroTitle>Welcome to TripMates</HeroTitle>
      <HeroDescription>
        Find your perfect travel companions and create unforgettable memories.
      </HeroDescription>
      <CTAButton>
      <a href="/SignUp">Get Started</a>
        </CTAButton>
    </HeroWrapper>
  );
}

export default HeroSection;
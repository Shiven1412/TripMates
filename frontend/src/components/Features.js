import React from "react";
import styled from "styled-components";

// Styled components
const FeaturesWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const FeaturesTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FeatureItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
`;

const FeatureItemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FeatureItemDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

// Component
function Features() {
  return (
    <FeaturesWrapper>
      <FeaturesTitle>Why Choose TripMates?</FeaturesTitle>
      <FeatureList>
        <FeatureItem>
          <FeatureItemTitle>Group Matching</FeatureItemTitle>
          <FeatureItemDescription>
            Connect with like-minded travelers based on your preferences.
          </FeatureItemDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureItemTitle>Expense Splitting</FeatureItemTitle>
          <FeatureItemDescription>
            Easily manage and split trip expenses among group members.
          </FeatureItemDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureItemTitle>Secure Payments</FeatureItemTitle>
          <FeatureItemDescription>
            Book your trips with confidence using our secure payment gateway.
          </FeatureItemDescription>
        </FeatureItem>
      </FeatureList>
    </FeaturesWrapper>
  );
}

export default Features;
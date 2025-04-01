import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const SignUpForm = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #333;
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Component
function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sign-up logic here (e.g., API call)
    navigate("/survey"); // Redirect to the survey form
  };

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Input type="password" placeholder="Confirm Password" required />
        <Button type="submit">Sign Up</Button>
        <Link href="/login">Already have an account? Login</Link>
      </SignUpForm>
    </SignUpWrapper>
  );
}

export default SignUp;
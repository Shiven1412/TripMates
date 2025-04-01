import React from "react";
import styled from "styled-components";

// Styled components
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const LoginForm = styled.form`
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
function Login() {
  return (
    <LoginWrapper>
      <LoginForm>
        <Title>Login</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
        <Link href="/signup">Don't have an account? Sign Up</Link>
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;
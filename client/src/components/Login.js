import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 20px;
  justify-items: center;
  
`;

const Form = styled.form`
  display: block;
  margin: auto;
  width: 600px;
  background-color: #074968;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px 0 rgba(226, 226, 229, 0.7);
  padding: 50px 35px;
  margin-left: 550px
  
  
`;

const Title = styled.h3`
  font-size: 40px;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 10px black;
`;

const Label = styled.label`
  display: block;
  margin-top: 2rem;
  font-size: 20px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: #f4f3f367;
  border-radius: 4px;
  padding: 15px 10px;
  margin-top: 8px;
  font-weight: 100;
  color:white;
  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: #f4f3f367;
  border-radius: 4px;
  padding: 15px 10px;
  margin-top: 8px;
  font-weight: 100;
  color:white;
  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;

const ShowHideIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  right: 20px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  background-color: #ffffff;
  padding: 15px 0;
  font-size: 28px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.1s;

  &:hover {
    transform: translate(-0.25rem, -0.25rem);
    box-shadow: 0.25rem 0.25rem #2a2a2c;
  }
`;

const Hr = styled.hr`
  margin-top: 20px;
  height: 1px;
  background-color: #ffffff7f;
  border: none;
  outline: navajowhite;
`;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Form>
        <Title> Login Form </Title>
        <Label htmlFor="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="Enter email or phone" />

        <Label htmlFor="password">Password</Label>
        <PasswordContainer>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            id="password"
          />
          <ShowHideIcon onClick={handleTogglePassword} className="fa-solid fa-eye-slash" />
        </PasswordContainer>

        <Button type="submit">Log In</Button><br></br>
        <Hr />
      </Form>
    </Container>
  );
};

export default LoginForm;

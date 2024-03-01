import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  justify-items: center;
  padding-top: 30px
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
  padding: 15px 15px;
  margin-left: 550px
`;

const Title = styled.h2`
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

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('your_api_endpoint/signup', formData);
      console.log('Signup Successful:', response.data);
    } catch (error) {
      console.error('Signup Failed:', error.message);
    }
  };

  return (
    <Container>
      <Form className="custom-form" onSubmit={handleSubmit}>
        <Title>SignUp</Title>
        <Label>
          Username:
          <Input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        </Label>
        <Label>
          Password:
          <Input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
        </Label>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default Signup;

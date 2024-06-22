import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';



const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color:black;
  font-weight:bold;
  font-size:20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const StyledLink = styled(Link)`
  display:block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  text-align:center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className='login-form'>
      <Title>ToDoList</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={id}
          onChange={handleIdChange}
          placeholder="아이디를 입력해주세요."
        />

        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요."
        />

        <Button type="submit">로그인</Button>
      </form>
      <StyledLink to="/register">회원가입하기</StyledLink>
    </div>
  );
};

export default Login;

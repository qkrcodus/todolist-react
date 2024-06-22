import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:black;
  font-weight:bold;
  font-size:20px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SubmitButton = styled.button`
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
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  text-align:center;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;


export const Register = () => {
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
    // 여기서 회원가입 처리 로직을 추가할 수 있습니다.
    console.log('Id:', id);
    console.log('Password:', password);
  };

  return (
    <div className='login-form'>
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleIdChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">회원가입 완료</SubmitButton>
      </form>
      <StyledLink to="/login">로그인 화면으로</StyledLink>
    </div>
  );
};

export default Register;

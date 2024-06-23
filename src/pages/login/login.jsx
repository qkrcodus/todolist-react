import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';
import axios from 'axios';



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
  const [error,setError]=useState(null);
  const navigate=useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(null);
    try {
        const response= await axios.post('/api/users/login', {
        username: id,
        password: password,
      });
      if(response.status===200){
        const {user_id}=response.data;
        console.log(user_id,"로그인 완료");
        navigate('/');
      }
    }catch(error){
        if (error.response) {
            const { detail } = error.response.data;
            if (error.response.status === 400) {
              setError({ general: 'username 또는 password가 필요합니다.' });
            } else if (error.response.status === 404) {
              setError({ general: '유저를 찾을 수 없습니다.' });
            } else {
              setError({ general: detail });
            }
          } else {
            setError({ general: '로그인에 실패했습니다. 다시 시도해주세요.' });
          }
    }
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

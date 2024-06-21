import React,{useState} from 'react'
import {Link} from "react-router-dom";
export const Register = () => {
    const[id,setId]=useState('');
    const[password,setPassword]=useState('');

    const handleIdChange=(e)=>{
        setId(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 회원가입 처리 로직을 추가할 수 있습니다.
        console.log('Id:',id);
        console.log('Password:', password);
    }
  return (
    <div>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleIdChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">회원가입 완료</button>
      </form>
      <Link to="/login">로그인 화면으로 돌아가기</Link>

    </div>
  )
}

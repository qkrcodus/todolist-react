import React,{useState} from 'react'

//함수형 컴포넌트 이름은 대문자로 시작해야한다. 안 그러면 리액트가 이를 일반 함수로 간주하게 된다.
export const Login = () => {
    // 상태변수인 id와 password를 정의해주고 , 초깃값 설정, 이들을 업데이트할 setID setPassword 정의까지
    const[id,setId]=useState('');
    const[password,setPassword]=useState('');

    //사용자의 입력, 즉 이벤트 발생시 실행될 이벤트 핸들러 함수 정의
    const handleIdChange=(e)=>{
        setId(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

  return (
    <div>
        <h1>ToDo</h1>
        <form>
            <input 
            type="text" 
            value={id} 
            onChange={handleIdChange}
            placeholder='아이디를 입력해주세요.'/>

            <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='비밀번호를 입력해주세요.'/>

            <button type="submit">로그인</button>

        </form>
    </div>
  )
}

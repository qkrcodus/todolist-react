import React,{useState} from 'react';
import './App.css'
import TodoWrapper from './pages/main/TodoWrapper';
import Calendar from './pages/main/Calendar';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px; 
`;

export const App=() =>{
  // 라우터에서 객체 형태 {user_id :"123" }로 넘어와서 구조 분해 할당한 뒤 보내줘야 한다
  const {user_id}=useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  // 캘린더에서 날짜를 선택할 때 호출되는 함수
  const handleDateSelect = (year, month, day) => {
    setSelectedDate({ year, month, day });
  };

  return(
    <AppContainer>
      <TodoWrapper selectedDate={selectedDate} user_id={user_id}/>
      <Calendar  onDateSelect={handleDateSelect}/>
    </AppContainer>
  )

}
export default App


import React,{useState} from 'react';
import './App.css'
import {TodoWrapper} from './pages/main/TodoWrapper';
import Calendar from './pages/main/Calendar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px; 
`;

export const App=() =>{
  const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜 상태
  // 캘린더에서 날짜를 선택할 때 호출되는 함수
  const handleDateSelect = (year, month, day) => {
    setSelectedDate({ year, month, day });
  };

  return(
    <AppContainer>
      <TodoWrapper selectedDate={selectedDate} />
      <Calendar  onDateSelect={handleDateSelect}/>
    </AppContainer>
  )

}
export default App


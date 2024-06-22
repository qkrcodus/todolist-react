import React from 'react';
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
  return(
    <AppContainer>
      <TodoWrapper/>
      <Calendar/>
    </AppContainer>
  )

}
export default App


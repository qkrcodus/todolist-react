import React from 'react';
import {createGlobalStyle} from 'styled-components';
import './App.css'
import { TodoTemplate } from './pages/main/TodoTemplate';
import { TodoHead } from './pages/main/TodoHead';
import {TodoList} from './pages/main/TodoList';
import { TodoItem } from './pages/main/TodoItem';
import { TodoCreate } from './pages/main/TodoCreate';

//styled component 를 만들고 이를 함수형 컴포넌트에 렌더링해준다. 
const GlobalStyle=createGlobalStyle`
  body{
  background: #e9ecef;
}`

function App() {
  return (
   <div>
    <GlobalStyle/>
    <TodoTemplate>
    <TodoHead/>
    <TodoList/>
    <TodoItem/>
    <TodoCreate/>
    </TodoTemplate>
   </div>
  )
}

export default App

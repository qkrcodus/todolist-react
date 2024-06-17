import {createGlobalStyle} from 'styled-components';
import './App.css'
import { TodoTemplate } from './pages/main/TodoTemplate';

const GlobalStyle=createGlobalStyle`
  body{
  background: #e9ecef;
  display:flex;
  justify-items:center;
  align-items:center;
}`

function App() {
  return (
   <div>
    <GlobalStyle/>
    <TodoTemplate/>
   </div>
  )
}

export default App

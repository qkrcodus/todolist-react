import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Register } from './pages/login/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* url에 들어갈 id를 변수처럼 ;동적 라우팅처리 방법중 path parameter */}
        {/* useParams로 App 컴포넌트에서 받아오겠지 */}
        <Route path="/:user_id" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

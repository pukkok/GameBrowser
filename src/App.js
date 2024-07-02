import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import JoinPage from './Login/JoinPage'

import axios from 'axios';
import MainPage from './Main/Main';
axios.defaults.baseURL = process.env.REACT_APP_RESTAPI_URL

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='join' element={<JoinPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

import Game from './components/Game_Screen/Game';
import Hints from './components/Game_Screen/Hints/Hints';
import Login from './components/Main_Screen/Login/Login';
import Main from './components/Main_Screen/Main';
import Navbar from './components/Main_Screen/Navbar/Navbar';

import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Main_Screen/Home/Home';
import LeaderBoard from './components/Main_Screen/LeaderBoard/LeaderBoard';
import AdminLogin from './components/Admin_Screen/AdminLogin';
import AdminDashboard from './components/Admin_Screen/AdminDashboard';

function App() {

  const dispatch = useDispatch();
  const { userState } = bindActionCreators(actionCreators, dispatch)
  const { loggedIn } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log(isLoggedIn);
    loggedIn(isLoggedIn);
  })

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={(localStorage.getItem('isLoggedIn')) ? <Navigate to="/game" /> : <Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/game' element={<Main />} />
          <Route path='/leaderBoard' element={<LeaderBoard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}/>
          <Route path="/admin/login" element={<AdminLogin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

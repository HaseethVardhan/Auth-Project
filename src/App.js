import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Signin from './pages/Signin.js';
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';
import About from './pages/About.js';
import Header from './components/Header.js';
 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

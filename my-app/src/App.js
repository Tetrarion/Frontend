import React, { useState } from "react";
import './styles/style.css';
import Comment from './Components/Comment.jsx'
import Profile from './Components/Profile.jsx'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comment/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile/:id" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

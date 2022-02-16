import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import Login from './pages/Login';
import ListPage from './pages/ListPage';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/mytasks" element={ <ListPage /> } />
    </Routes>
  );
}

export default App;

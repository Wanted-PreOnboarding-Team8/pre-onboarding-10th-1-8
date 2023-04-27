import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

export default function Router() {
  return (
    <>
      <Redirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
      </Routes>
    </>
  );
}

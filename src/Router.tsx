import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';
import NotFound from './pages/NotFound';
import PublicRoute from './components/route/PublicRoute';
import ProtectedRoute from './components/route/ProtectedRoute';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

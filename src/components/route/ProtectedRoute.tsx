import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';

function ProtectedRoute() {
  const outlet = useOutlet();
  const token = localStorage.getItem('access_token');

  if (token === null) {
    return <Navigate to="/signin" />;
  }

  return <div>{outlet}</div>;
}

export default ProtectedRoute;

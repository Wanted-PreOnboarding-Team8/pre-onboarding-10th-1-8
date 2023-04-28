import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';

function PublicRoute() {
  const outlet = useOutlet();
  const token = localStorage.getItem('access_token');

  if (token !== null) {
    return <Navigate to="/todo" />;
  }

  return <div>{outlet}</div>;
}

export default PublicRoute;

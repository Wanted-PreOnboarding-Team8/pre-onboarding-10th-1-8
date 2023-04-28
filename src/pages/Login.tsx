import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import useAuthApi from '../hooks/useAuthApi';

function Login() {
  const loginSubmit = useAuthApi('/auth/signin');

  return <LoginForm buttonText="로그인" type="signin" onAuthSubmit={loginSubmit} />;
}

export default Login;

import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import useAuthApi from '../hooks/useAuthApi';

function Register() {
  const registerSubmit = useAuthApi('/auth/signup');

  return <LoginForm buttonText="회원가입" type="signup" onAuthSubmit={registerSubmit} />;
}

export default Register;

import React, { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import UseInputValidation from '../hooks/useInputValidation';
import { type FormType } from '../hooks/useAuthApi';

interface LoginFormType {
  // onSubmit: (e: ChangeEvent<HTMLInputElement>) => void;
  // onSubmit: (emailValue: string, passwordValue: string) => void;
  buttonText: '로그인' | '회원가입' | string;
  type: 'signin' | 'signup' | string;
  onAuthSubmit: (form: FormType) => Promise<number | undefined>;
}

function LoginForm({ buttonText, type, onAuthSubmit }: LoginFormType) {
  const {
    value: emailValue,
    isValid: isEmailValid,
    handleChange: handleEmailChange,
  } = UseInputValidation(/@/g);

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    handleChange: handlePasswordChange,
  } = UseInputValidation(/^.{8,}$/);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    // page단에서 props로 받아와서 콜 -> 컴포넌트단에서 button-id? 로 구분해서 api-call
    if (type === 'signup') {
      // signup api call
      const statusCode = await onAuthSubmit(formData);

      if (type === 'signup' && statusCode === 201) {
        navigate('/signin');
      }
      if (statusCode === 200) {
        navigate('/todo');
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input data-testid="email-input" value={emailValue} onChange={handleEmailChange} />
        {!isEmailValid && <p>@가 포함되어야 합니다.</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          data-testid="password-input"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
        {!isPasswordValid && <p>8자리 이상이여야 합니다.</p>}
      </div>

      <button
        data-testid={`${type}-button`}
        type="submit"
        disabled={!isEmailValid || !isPasswordValid}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default LoginForm;

import React, { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { type AxiosResponse } from 'axios';
import UseInputValidation from '../../hooks/useInputValidation';
import { type FormType } from '../../hooks/useAuthApi';
import MESSAGE from './const/MESSAGE';
import * as S from './LoginFormStyle';

interface LoginFormType {
  buttonText: '로그인' | '회원가입' | string;
  type: 'signin' | 'signup' | string;
  onAuthSubmit: (form: FormType) => Promise<AxiosResponse>;
}

function LoginForm({ buttonText, type, onAuthSubmit }: LoginFormType) {
  const navigate = useNavigate();

  const {
    value: email,
    isValid: isEmailValid,
    handleChange: handleEmailChange,
  } = UseInputValidation(/@/g);

  const {
    value: password,
    isValid: isPasswordValid,
    handleChange: handlePasswordChange,
  } = UseInputValidation(/^.{8,}$/);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };

    const response = await onAuthSubmit(formData);

    const { status } = response;
    if (type === 'signup' && status === 201) {
      navigate('/signin');
    }
    if (type === 'signin' && status === 200) {
      navigate('/todo');
    }
  };

  return (
    <S.Form className="login-form" onSubmit={handleSubmit}>
      <S.InputRow>
        <S.LoginFormLabel htmlFor="email">Email:</S.LoginFormLabel>
        <S.LoginFormInput
          data-testid="email-input"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={MESSAGE.INPUTEMAIL}
        />
        {isEmailValid ? (
          <S.ValidEmoji>👌</S.ValidEmoji>
        ) : (
          <S.ErrorMessage>{MESSAGE.EMAILERROR}</S.ErrorMessage>
        )}
      </S.InputRow>

      <S.InputRow>
        <S.LoginFormLabel htmlFor="password">Password:</S.LoginFormLabel>
        <S.LoginFormInput
          type="password"
          data-testid="password-input"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder={MESSAGE.INPUTPASSWORD}
        />
        {isPasswordValid ? (
          <S.ValidEmoji>👌</S.ValidEmoji>
        ) : (
          <S.ErrorMessage>{MESSAGE.PASSWORDERROR}</S.ErrorMessage>
        )}
      </S.InputRow>

      <S.LoginFormBtn
        data-testid={`${type}-button`}
        type="submit"
        disabled={!isEmailValid || !isPasswordValid}
      >
        {buttonText}
      </S.LoginFormBtn>
    </S.Form>
  );
}

export default LoginForm;

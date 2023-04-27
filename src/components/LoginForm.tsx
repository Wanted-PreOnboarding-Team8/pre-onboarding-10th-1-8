import React, { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { type AxiosResponse } from 'axios';
import styled from 'styled-components';
import UseInputValidation from '../hooks/useInputValidation';
import { type FormType } from '../hooks/useAuthApi';
import MESSAGE from './MESSAGE';
// import { type FormType, type ApiError } from '../hooks/useAuthApi';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

const ErrorMessage = styled.p`
  color: #ff7700;
  font-weight: 400;
`;

const ValidEmoji = styled(ErrorMessage)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: lightgray;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;

  :hover {
    background-color: #e6dede;
  }
`;

interface LoginFormType {
  buttonText: '로그인' | '회원가입' | string;
  type: 'signin' | 'signup' | string;
  onAuthSubmit: (form: FormType) => Promise<AxiosResponse>;
  // 옵션2: ApiError 사용하는 방식
  // onAuthSubmit: (form: FormType) => Promise<AxiosResponse | ApiError>;
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
    // page단에서 props로 넘겨받은 함수 호출
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
    <FormContainer>
      <Form className="login-form" onSubmit={handleSubmit}>
        <InputRow>
          <Label htmlFor="email">Email:</Label>
          <Input
            data-testid="email-input"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={MESSAGE.INPUTEMAIL}
          />
          {isEmailValid ? (
            <ValidEmoji>👍</ValidEmoji>
          ) : (
            <ErrorMessage>{MESSAGE.EMAILERROR}</ErrorMessage>
          )}
        </InputRow>

        <InputRow>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            data-testid="password-input"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder={MESSAGE.INPUTPASSWORD}
          />
          {isPasswordValid ? (
            <ValidEmoji>👍</ValidEmoji>
          ) : (
            <ErrorMessage>{MESSAGE.PASSWORDERROR}</ErrorMessage>
          )}
        </InputRow>

        <Button
          data-testid={`${type}-button`}
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
        >
          {buttonText}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;

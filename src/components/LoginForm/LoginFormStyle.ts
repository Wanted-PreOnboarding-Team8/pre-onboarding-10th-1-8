import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: #ff7700;
  font-weight: 400;
`;

export const ValidEmoji = styled(ErrorMessage)``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginFormInput = styled.input`
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

export const LoginFormLabel = styled.label`
  font-weight: bold;
`;

export const LoginFormBtn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid gray;

  :hover {
    background-color: #e6dede;
  }
`;

import styled from 'styled-components';

export const AddTodoInput = styled.input`
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

export const AddTodoButton = styled.button`
  cursor: pointer;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-left: 12px;

  :hover {
    background-color: #e6dede;
  }
`;

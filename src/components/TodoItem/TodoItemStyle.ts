import styled from 'styled-components';

const TodoList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(1) {
    margin-top: 16px;
  }
`;

export default TodoList;

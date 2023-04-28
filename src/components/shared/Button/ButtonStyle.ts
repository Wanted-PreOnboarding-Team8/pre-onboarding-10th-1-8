import styled from 'styled-components';

const ElButton = styled.button`
  cursor: pointer;
  width: 42px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-right: 8px;

  :nth-child(2) {
    margin-right: 0;
  }

  :hover {
    background-color: #e6dede;
  }
`;

export default ElButton;

import styled from 'styled-components';

export const MainWrapper = styled.section``;

export const LinkBox = styled.div`
  width: 300px;
  height: 100px;
  margin: 0 auto;

  a {
    width: 50%;
    text-align: center;
    display: inline-block;
  }
`;

export const TodoTxt = styled.h1`
  font-size: 3.2rem;
  word-spacing: 0.4em;
  font-weight: 900;
  text-align: center;
  margin: 80px 0 40px;
  color: #2b2b2b;
  margin-right: 12px;
`;

export const OrangeButton = styled.button`
  font-size: 0.9em;
  border: 1px solid #f2a649;
  border-radius: 20px;
  padding: 0.6em 2em;

  &:disabled {
    border: 1px solid rgba(16, 16, 16, 0.3);
  }

  &:disabled:hover {
    border: 1px solid rgba(16, 16, 16, 0.3);
    background-color: transparent;
    color: rgba(16, 16, 16, 0.3);
  }

  &:hover {
    border: 1px solid #f2a649;
    background-color: #f2a649;
    color: #fff;
    cursor: pointer;
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HomeStyle';

function Home() {
  return (
    <S.MainWrapper>
      <S.TodoTxt>Todo-List</S.TodoTxt>
      <S.LinkBox>
        <Link to="/signin">
          <S.OrangeButton data-testid="signin-button">로그인</S.OrangeButton>
        </Link>
        <Link to="/signup">
          <S.OrangeButton data-testid="signup-button">회원가입</S.OrangeButton>
        </Link>
      </S.LinkBox>
    </S.MainWrapper>
  );
}

export default Home;

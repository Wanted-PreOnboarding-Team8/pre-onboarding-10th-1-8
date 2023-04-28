import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      존재하지 않는 페이지입니다.
      <Link to="/">
        <div>메인 페이지</div>
      </Link>
    </div>
  );
}

export default NotFound;

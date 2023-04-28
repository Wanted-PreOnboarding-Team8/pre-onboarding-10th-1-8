import React from 'react';
import ElButton from './ButtonStyle';

interface ButtonProps {
  dataId: string;
  buttonText: string;
  onClickFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ dataId, buttonText, onClickFn }: ButtonProps) {
  return (
    <ElButton data-testid={dataId} onClick={onClickFn}>
      {buttonText}
    </ElButton>
  );
}

export default Button;

import type { FC } from 'react';
import { type ButtonType } from '../../../types/buttonType';

const Button: FC<ButtonType> = ({
  buttonWidth,
  buttonHeight,
  text,
  style: customStyle,
}) => {
  const buttonStyles = {
    width: buttonWidth,
    height: buttonHeight,
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    ...customStyle,
  };
  return <button style={buttonStyles}>{text}</button>;
};

export default Button;

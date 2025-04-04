import { FC, ReactNode } from 'react';
import './Button.scss';

interface IButton {
  children?: ReactNode;
  bordered?: boolean;
  className?: string;
}

const Button: FC<IButton> = ({
  children,
  bordered = false,
  className = '',
}) => {
  return (
    <button
      className={`btn-s uppercase btn btn-primary with-ico  ${
        bordered ? 'border-2' : ''
      } ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

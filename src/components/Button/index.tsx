import React, { ReactElement } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface ButtonProps {
  onClick?: (event: any) => void;
  title: string;
  type?: 'button' | 'submit';
  size?: 'ultra_big' | 'big' | 'medium' | 'normal' | 'small';
  transparent?: boolean;
  mobileBig?: boolean;
  iconComponent?: ReactElement | ReactElement[];
  disabled?: boolean;
  className?: string;
  dataCY?: string;
}

export default function Button({
  onClick,
  title,
  type = 'button',
  size = 'medium',
  transparent,
  mobileBig,
  iconComponent,
  disabled,
  className,
  dataCY,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'Button',
        `Button__${size}`,
        { Button__mobileBig: mobileBig, Button__transparent: transparent },
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cy={`button-${dataCY}`}
    >
      <div className="Button__wrapper">
        {iconComponent && iconComponent}

        <span>{title}</span>
      </div>
    </button>
  );
}

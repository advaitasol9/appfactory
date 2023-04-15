import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import Spinner from '../Spinner';
import classes from './_style.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Default' | 'Outline' | 'Link' | 'None';
  isLoading?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = 'Default',
  isLoading = false,
  leftElement,
  rightElement,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(classes['button'], className, {
        [classes['button-default']]: variant == 'Default',
        [classes['button-outline']]: variant == 'Outline',
        [classes['button-link']]: variant == 'Link',
        [classes['button-none']]: variant == 'None',
      })}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classes['wrapper']}>
          <>
            {leftElement && leftElement}
            {children}
            {rightElement && rightElement}
          </>
        </div>
      )}
    </button>
  );
};

export default Button;

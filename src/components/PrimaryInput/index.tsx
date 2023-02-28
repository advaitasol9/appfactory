import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, ReactElement } from 'react';
import classes from './_style.module.scss';

export interface PrimaryInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  leftIcon?: () => ReactElement;
  rightIcon?: () => ReactElement;
  label?: string;
  value?: string | number | string[];
  type?: HTMLInputTypeAttribute;
  error?: string;
}

const PrimaryInput = ({
  leftIcon,
  rightIcon,
  value,
  label,
  type,
  className,
  error,
  ...rest
}: PrimaryInputProps) => {
  return (
    <div
      className={classNames(classes['primary-input'], className, {
        [classes['primary-input--error']]: error,
      })}
    >
      {label && <label>{label}</label>}
      <div className={classes['input-row']}>
        {leftIcon && leftIcon()}
        <input value={value} type={type} {...rest} />
        {rightIcon && rightIcon()}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

PrimaryInput.defaultProps = {
  value: '',
  type: 'text',
};

export default PrimaryInput;

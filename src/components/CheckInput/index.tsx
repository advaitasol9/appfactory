import classNames from 'classnames';
import React from 'react';
import classes from './_style.module.scss';

export interface CheckInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  type: 'radio' | 'checkbox';
  checked: boolean | undefined;
  label?: string;
}

const CheckInput = ({
  type,
  checked,
  label,
  className,
  ...rest
}: CheckInputProps) => {
  return (
    <div className={classNames(classes.checkInput, className)}>
      <input type={type} checked={checked} {...rest} />
      {label && <label>{label}</label>}
    </div>
  );
};

CheckInput.defaultProps = {
  type: 'radio',
  checked: false,
};

export default CheckInput;

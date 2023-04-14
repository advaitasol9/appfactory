import classNames from 'classnames';
import React from 'react';
import { FormDataTypeProps } from '../../types';
import classes from './_style.module.scss';

export interface SelectInputProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  label?: string;
  value?: string | number | string[];
  options: FormDataTypeProps[];
  info?: string | JSX.Element;
  error?: string;
}

const SelectInput = ({
  label,
  options,
  className,
  error,
  info,
  ...rest
}: SelectInputProps) => {
  return (
    <div
      className={classNames(classes['select-input'], className, {
        [classes['select-input--error']]: error,
      })}
    >
      {label && <label>{label}</label>}
      <div className={classes['input-row']}>
        <select {...rest}>
          {options.map((option: FormDataTypeProps) => (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      {(info || error) && error ? (
        <p className={classes['error']}>{error}</p>
      ) : typeof info == 'string' ? (
        <p className={classes['info']}>{info}</p>
      ) : (
        info
      )}
    </div>
  );
};

SelectInput.defaultProps = {};

export default SelectInput;

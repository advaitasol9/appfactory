import React, { useEffect, useState } from 'react';
import classes from './_style.module.scss';
import CheckInput from '../CheckInput';
import classNames from 'classnames';
import { FormDataTypeProps } from '../../types';

export interface CheckGroupInputProps {
  label?: string;
  options: FormDataTypeProps[];
  error?: string;
  multiple?: boolean;
  selectedOptions?: FormDataTypeProps[];
  type?: 'radio' | 'checkbox';
  className?: string;
  onChange?: (selectedOptions: FormDataTypeProps[]) => void;
}

const CheckGroupInput = ({
  label,
  options,
  error,
  multiple = false,
  selectedOptions,
  type = 'radio',
  className,
  onChange = () => {},
}: CheckGroupInputProps) => {
  const [selectedOptns, setSelectedOptns] = useState<FormDataTypeProps[]>([]);

  useEffect(() => {
    setSelectedOptns(selectedOptions || []);
  }, [selectedOptions]);

  const handleTypeChange = (item: FormDataTypeProps) => {
    let tempArr = [];
    if (selectedOptns.find(op => op.id == item.id) != undefined) {
      tempArr = [...selectedOptns].filter(op => op.id != item.id);
    } else {
      tempArr = multiple ? [...selectedOptns, item] : [item];
    }
    console.log('tempArr', tempArr);
    onChange(tempArr);
    setSelectedOptns(tempArr);
  };

  return (
    <div
      className={classNames(classes['check-input-group'], className, {
        [classes['check-input-group--error']]: error,
      })}
    >
      {label && <p className={classes.label}>{label}</p>}
      <div className={classes.options}>
        {options.map((item: FormDataTypeProps) => (
          <CheckInput
            key={item.id}
            type={type}
            checked={selectedOptns.find(op => op.id == item.id) != undefined}
            onClick={() => handleTypeChange(item)}
            label={item.title}
            className={classes['select-input']}
          />
        ))}
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default CheckGroupInput;

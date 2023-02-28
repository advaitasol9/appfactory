import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './_style.module.scss';

export interface AvatarProps {
  label: string;
  img?: string;
  subLabel?: string;
  className?: string | undefined;
}

const Avatar: FC<AvatarProps> = ({ label, img, subLabel, className }) => {
  // const getInitials = (name: string) => {
  //   return name
  //     .split(' ')
  //     .splice(0, 2)
  //     .reduce((acc, cur) => {
  //       return acc.concat(cur[0]);
  //     }, '');
  // };

  return (
    <div className={classNames(classes.avatar, className)}>
      <div className={classes.imgWrapper}>
        {img ? <img src={img} alt="User avatar" /> : <p>{label[0]}</p>}
      </div>

      {label && (
        <div className={classes.labelWrapper}>
          <p className={classes.label}>{label}</p>
          <p className={classes['sub-label']}>{subLabel}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;

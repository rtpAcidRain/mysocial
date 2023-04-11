import { FC } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader:FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls['lds-roller'], {}, [])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

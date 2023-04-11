import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError:FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const reload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Произошла непредвиденная ошибка')}
      <Button onClick={reload}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};

export { PageError };

import React from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.SECONDARY}
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };

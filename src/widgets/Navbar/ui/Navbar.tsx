import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export {Navbar};



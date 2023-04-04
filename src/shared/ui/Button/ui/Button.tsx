import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

const Button:FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export {Button};
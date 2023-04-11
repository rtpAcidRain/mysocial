import { useState } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={
        classNames(
          cls.Sidebar,
          { [cls.collapsed]: collapsed },
          [className],
        )
    }
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export { Sidebar };

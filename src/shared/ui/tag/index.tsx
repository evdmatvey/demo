import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface TagProps {
  text: string;
  color: 'gray' | 'blue' | 'peach';
  icon?: ReactNode;
}

export const Tag = ({ text, color, icon }: TagProps) => {
  const classes = clsx(styles.root, styles[color], {
    [styles.withIcon]: icon,
  });

  return (
    <div className={classes}>
      {icon} {text}
    </div>
  );
};

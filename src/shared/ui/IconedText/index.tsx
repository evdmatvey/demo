import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface IconedTextProps {
  size: 'small' | 'medium';
  children: ReactNode;
}

export const IconedText = ({ size, children }: IconedTextProps) => {
  const classes = clsx(styles.root, styles[size]);

  return <div className={classes}>{children}</div>;
};

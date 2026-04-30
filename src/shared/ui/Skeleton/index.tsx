import styles from './styles.module.css';

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton = ({
  width = '100%',
  height = '100%',
}: SkeletonProps) => {
  return <div className={styles.root} style={{ width, height }}></div>;
};

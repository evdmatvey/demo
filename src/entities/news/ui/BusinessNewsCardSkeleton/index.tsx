import styles from './styles.module.css';

interface BusinessNewsCardSkeletonProps {
  isPrimary?: boolean;
}

export const BusinessNewsCardSkeleton = ({
  isPrimary,
}: BusinessNewsCardSkeletonProps) => {
  return (
    <div className={styles.root} data-primary={isPrimary}>
      BusinessNewsCardSkeleton
    </div>
  );
};

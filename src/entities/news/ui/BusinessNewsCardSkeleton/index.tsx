import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './styles.module.css';

interface BusinessNewsCardSkeletonProps {
  isPrimary?: boolean;
}

export const BusinessNewsCardSkeleton = ({
  isPrimary,
}: BusinessNewsCardSkeletonProps) => {
  return (
    <div className={styles.root} data-primary={isPrimary}>
      {isPrimary && (
        <>
          <div className={styles.cover}>
            <Skeleton />
          </div>
          <div className={styles.badges}>
            <Skeleton />
          </div>
        </>
      )}
      <div className={styles.title}>
        <Skeleton />
      </div>
      <div className={styles.info}>
        <Skeleton />
      </div>
    </div>
  );
};

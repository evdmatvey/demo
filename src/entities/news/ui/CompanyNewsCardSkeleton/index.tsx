import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './styles.module.css';

interface CompanyNewsCardSkeletonProps {
  isPrimary?: boolean;
}

export const CompanyNewsCardSkeleton = ({
  isPrimary,
}: CompanyNewsCardSkeletonProps) => {
  return (
    <div className={styles.root} data-primary={isPrimary}>
      <div className={styles.cover}>
        <Skeleton />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <Skeleton />
        </div>
        <div className={styles.info}>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

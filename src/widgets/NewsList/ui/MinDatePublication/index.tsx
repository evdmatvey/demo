import { formatDate } from '@/shared/lib/format-date';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './styles.module.css';

interface MinDatePublicationProps {
  isLoading: boolean;
  minDatePublication: Date | undefined;
}

export const MinDatePublication = ({
  isLoading,
  minDatePublication,
}: MinDatePublicationProps) => {
  if (isLoading || !minDatePublication)
    return <Skeleton width="100px" height="16px" />;

  return <p className={styles.root}>{formatDate(minDatePublication)}</p>;
};

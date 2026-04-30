import { formatDate } from '@/shared/lib/format-date';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './styles.module.css';

interface MinDatePublicationProps {
  isLoading: boolean;
  isError: boolean;
  minDatePublication: Date | undefined;
}

export const MinDatePublication = ({
  isLoading,
  isError,
  minDatePublication,
}: MinDatePublicationProps) => {
  if (isError) return <p className={styles.root}>Упс...</p>;

  if (isLoading || !minDatePublication)
    return <Skeleton width="100px" height="16px" />;

  return <p className={styles.root}>{formatDate(minDatePublication)}</p>;
};

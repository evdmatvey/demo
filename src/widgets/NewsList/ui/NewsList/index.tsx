import { type NewsType, type NewsVariant } from '@/entities/news';
import { PaginationArrows } from '@/shared/ui/PaginationArrows';
import { useNewsList } from '../../model/useNewsList';
import { MinDatePublication } from '../MinDatePublication';
import { NewsCardList } from '../NewsCardList';
import styles from './styles.module.css';

interface NewsListProps {
  title: string;
  variant: NewsVariant;
  type?: NewsType;
  newsPerPage?: number;
}

export const NewsList = ({
  title,
  variant,
  type = 'short',
  newsPerPage = 3,
}: NewsListProps) => {
  const {
    data,
    isLoading,
    isFetching,
    isNextDisabled,
    isPrevDisabled,
    showNextPage,
    showPrevPage,
  } = useNewsList(newsPerPage, type);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <MinDatePublication
          isLoading={isLoading}
          minDatePublication={data?.minDatePublication}
        />
      </div>
      <NewsCardList
        isLoading={isFetching && !data}
        news={data?.news ?? []}
        variant={variant}
        newsPerPage={newsPerPage}
      />
      <div className={styles.pagination}>
        <PaginationArrows
          isNextDisabled={isNextDisabled}
          isPrevDisables={isPrevDisabled}
          onClickNext={showNextPage}
          onClickPrev={showPrevPage}
        />
      </div>
    </div>
  );
};

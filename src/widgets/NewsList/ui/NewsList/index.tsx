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
    isNoData,
    isError,
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
          isError={isError}
          minDatePublication={data?.minDatePublication}
        />
      </div>
      <NewsCardList
        isNoData={isNoData}
        isLoading={isFetching && !data}
        isError={isError}
        news={data?.news ?? []}
        variant={variant}
        newsPerPage={newsPerPage}
      />
      {!isNoData && (
        <div className={styles.pagination}>
          <PaginationArrows
            isNextDisabled={isNextDisabled}
            isPrevDisables={isPrevDisabled}
            onClickNext={showNextPage}
            onClickPrev={showPrevPage}
          />
        </div>
      )}
    </div>
  );
};

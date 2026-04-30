import { useMemo } from 'react';
import {
  NewsCard,
  NewsCardSkeleton,
  type NewsData,
  type NewsVariant,
} from '@/entities/news';
import styles from './styles.module.css';

interface NewsCardListProps {
  isLoading: boolean;
  variant: NewsVariant;
  newsPerPage: number;
  news: NewsData[];
}

export const NewsCardList = ({
  news,
  variant,
  newsPerPage,
  isLoading,
}: NewsCardListProps) => {
  const skeletons = useMemo(
    () =>
      Array.from({ length: newsPerPage }).map((_, index) => (
        <NewsCardSkeleton
          key={index}
          variant={variant}
          isPrimary={index === 0}
        />
      )),
    [newsPerPage, variant],
  );

  if (isLoading) return <div className={styles.root}>{skeletons}</div>;

  return (
    <div className={styles.root}>
      {news.map((news, index) => {
        if (index === 0)
          return (
            <NewsCard key={news.id} news={news} variant={variant} isPrimary />
          );

        return <NewsCard key={news.id} news={news} variant={variant} />;
      })}
    </div>
  );
};

import clsx from 'clsx';
import { useMemo } from 'react';
import {
  NewsCard,
  NewsCardSkeleton,
  type NewsData,
  type NewsVariant,
} from '@/entities/news';
import { NewsListPlaceholder } from '../NewsListPlaceholder';
import styles from './styles.module.css';

interface NewsCardListProps {
  isLoading: boolean;
  isNoData: boolean;
  isError: boolean;
  variant: NewsVariant;
  newsPerPage: number;
  news: NewsData[];
}

export const NewsCardList = ({
  news,
  variant,
  newsPerPage,
  isLoading,
  isNoData,
  isError,
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

  const classes = clsx(styles.root, styles[variant]);

  if (isLoading) return <div className={classes}>{skeletons}</div>;

  if (isNoData) return <NewsListPlaceholder text="Новых новостей нет" />;
  if (isError) return <NewsListPlaceholder text="Произошла ошибка" />;

  return (
    <div className={classes}>
      {news.map((news, index) => (
        <NewsCard
          key={news.id}
          news={news}
          variant={variant}
          isPrimary={index === 0}
        />
      ))}
    </div>
  );
};

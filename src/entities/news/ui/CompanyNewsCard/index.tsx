import { formatDate } from '@/shared/lib/format-date';
import { Tag } from '@/shared/ui/tag';
import type { NewsData } from '../../model/news';
import { NewsCardCover } from '../NewsCardCover';
import { NewsCardStatistics } from '../NewsCardStatistics';
import styles from './styles.module.css';

interface CompanyNewsCardProps {
  news: NewsData;
  isPrimary?: boolean;
}

export const CompanyNewsCard = ({ news, isPrimary }: CompanyNewsCardProps) => {
  return (
    <div className={styles.root} data-primary={isPrimary}>
      <NewsCardCover className={styles.cover} covers={news.cover} />
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.publishedAt}>
            {formatDate(news.publishedAt)}
          </div>
          <h4 className={styles.title}>{news.title}</h4>
        </div>
        <div className={styles.info}>
          <div className={styles.tags}>
            {news.directions.slice(0, 2).map((direction) => (
              <Tag key={direction.id} text={direction.name} color="gray" />
            ))}
            {news.rubrics.slice(0, 2).map((rubric) => (
              <Tag key={rubric.id} text={rubric.name} color="blue" />
            ))}
          </div>
          <NewsCardStatistics
            likeCount={news.likeCount}
            viewCount={news.viewCount}
          />
        </div>
      </div>
    </div>
  );
};

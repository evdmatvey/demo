import { formatDate } from '@/shared/lib/format-date';
import { Hashtag } from '@/shared/ui/Hashtag';
import { StarIcon } from '@/shared/ui/Icons/StarIcon';
import { Tag } from '@/shared/ui/tag';
import type { NewsData } from '../../model/news';
import { NewsCardCover } from '../NewsCardCover';
import { NewsCardStatistics } from '../NewsCardStatistics';
import styles from './styles.module.css';

interface BusinessNewsCard {
  news: NewsData;
  isPrimary?: boolean;
}

export const BusinessNewsCard = ({ news, isPrimary }: BusinessNewsCard) => {
  return (
    <div className={styles.root} data-primary={isPrimary}>
      {isPrimary && (
        <>
          <NewsCardCover className={styles.cover} covers={news.cover} />
          <div className={styles.badges}>
            <Tag color="peach" text="Топ новость" icon={<StarIcon />} />
          </div>
        </>
      )}
      <h4 className={styles.title}>{news.title}</h4>
      <div className={styles.info}>
        <div className={styles.tags}>
          {news.directions.slice(0, 2).map((direction) => (
            <Hashtag key={direction.id} text={direction.name} />
          ))}
          {news.rubrics.slice(0, 2).map((rubric) => (
            <Hashtag key={rubric.id} text={rubric.name} />
          ))}
        </div>
        <div className={styles.publishedAt}>{formatDate(news.publishedAt)}</div>
        <NewsCardStatistics
          likeCount={news.likeCount}
          viewCount={news.viewCount}
          size="small"
        />
      </div>
    </div>
  );
};

import { requestImage } from '@/shared/api/request-image';
import { formatDate } from '@/shared/lib/format-date';
import { useLazyLoad } from '@/shared/model/useLazyLoad';
import { IconedText } from '@/shared/ui/IconedText';
import { LikeIcon } from '@/shared/ui/Icons/LikeIcon';
import { ViewIcon } from '@/shared/ui/Icons/ViewIcon';
import placeholder from '@/shared/ui/assets/image-placeholder.svg';
import { Tag } from '@/shared/ui/tag';
import type { NewsData } from '../../model/news';
import styles from './styles.module.css';

interface CompanyNewsCardProps {
  news: NewsData;
  isPrimary?: boolean;
}

export const CompanyNewsCard = ({ news, isPrimary }: CompanyNewsCardProps) => {
  const { ref, isVisible } = useLazyLoad();
  const cover = news.cover.images[0];

  return (
    <div className={styles.root} data-primary={isPrimary}>
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet={isVisible ? requestImage(cover.hd) : placeholder}
        />
        <source
          media="(min-width: 800px)"
          srcSet={isVisible ? requestImage(cover.m) : placeholder}
        />
        <img
          ref={ref}
          className={styles.cover}
          src={isVisible ? requestImage(cover.m) : placeholder}
          alt="Обложка новости"
        />
      </picture>
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
              <Tag text={direction.name} color="gray" />
            ))}
            {news.rubrics.slice(0, 2).map((rubric) => (
              <Tag text={rubric.name} color="blue" />
            ))}
          </div>
          <div className={styles.metrics}>
            <IconedText size="medium">
              <LikeIcon />
              {news.likeCount}
            </IconedText>
            <IconedText size="medium">
              <ViewIcon />
              {news.viewCount}
            </IconedText>
          </div>
        </div>
      </div>
    </div>
  );
};

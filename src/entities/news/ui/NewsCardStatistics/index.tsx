import clsx from 'clsx';
import { IconedText } from '@/shared/ui/IconedText';
import { LikeIcon } from '@/shared/ui/Icons/LikeIcon';
import { ViewIcon } from '@/shared/ui/Icons/ViewIcon';
import styles from './styles.module.css';

interface NewsCardStatisticsProps {
  likeCount: number;
  viewCount: number;
  size?: 'small' | 'medium';
}

export const NewsCardStatistics = ({
  likeCount,
  viewCount,
  size = 'medium',
}: NewsCardStatisticsProps) => {
  const classes = clsx(styles.root, styles[size]);

  return (
    <div className={classes}>
      <IconedText size={size}>
        <LikeIcon />
        {likeCount}
      </IconedText>
      <IconedText size={size}>
        <ViewIcon />
        {viewCount}
      </IconedText>
    </div>
  );
};

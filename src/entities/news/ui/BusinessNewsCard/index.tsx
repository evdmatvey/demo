import type { NewsData } from '../../model/news';
import styles from './styles.module.css';

interface BusinessNewsCard {
  news: NewsData;
  isPrimary?: boolean;
}

export const BusinessNewsCard = ({ news, isPrimary }: BusinessNewsCard) => {
  return <div>BusinessNewsCard</div>;
};

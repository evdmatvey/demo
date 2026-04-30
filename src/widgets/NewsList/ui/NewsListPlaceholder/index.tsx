import placeholder from '@/shared/ui/assets/news-placeholder.svg';
import styles from './styles.module.css';

interface NewsListPlaceholderProps {
  text: string;
}

export const NewsListPlaceholder = ({ text }: NewsListPlaceholderProps) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src={placeholder}
        alt="Картинка пустой тележки"
      />
      <div className={styles.description}>{text}</div>
    </div>
  );
};

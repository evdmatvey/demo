import { NewsList } from '@/widgets/NewsList';
import styles from './styles.module.css';

export const Home = () => {
  return (
    <div className={styles.root}>
      <NewsList title="Бизнес" newsPerPage={3} variant="business" />
      <NewsList title="Новости компании" newsPerPage={3} variant="company" />
      <NewsList
        title="Важные новости"
        newsPerPage={3}
        variant="company"
        type="empty"
      />
    </div>
  );
};

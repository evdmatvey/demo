import { NewsList } from '@/widgets/NewsList';
import styles from './styles.module.css';

export const Home = () => {
  return (
    <div className={styles.root}>
      <NewsList title="Новости компании" newsPerPage={3} variant="company" />
    </div>
  );
};

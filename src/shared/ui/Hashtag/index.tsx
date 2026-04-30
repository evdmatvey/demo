import styles from './styles.module.css';

interface HashtagProps {
  text: string;
}

export const Hashtag = ({ text }: HashtagProps) => {
  return <div className={styles.root}>#{text}</div>;
};

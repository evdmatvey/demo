import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import styles from './styles.module.css';

interface PaginationArrowsProps {
  isNextDisabled: boolean;
  isPrevDisables: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
}

export const PaginationArrows = ({
  isNextDisabled,
  isPrevDisables,
  onClickNext,
  onClickPrev,
}: PaginationArrowsProps) => {
  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        onClick={onClickPrev}
        disabled={isPrevDisables}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className={styles.button}
        onClick={onClickNext}
        disabled={isNextDisabled}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

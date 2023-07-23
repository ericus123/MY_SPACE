import styles from './index.module.scss';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Pagination = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  const canNext = false;
  const canPrev = true;
  return (
    <div
      className={`${styles.container} ${isDarkMode && styles.container_dark}`}
    >
      <div className={`${styles.left} ${!canPrev && styles.disabled}`}>
        <FaCaretLeft /> <span>Prev</span>
      </div>
      <div className={`${styles.right} ${!canNext && styles.disabled}`}>
        <span>Next</span>
        <FaCaretRight />
      </div>
    </div>
  );
};

export default Pagination;

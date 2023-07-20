import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

const Footer = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);
  return (
    <div className={`${styles.footer} ${!isDarkMode && styles.light}`}>
      <p className={styles.text}>
        Crafted with <span className={styles.icon}>❤️</span> by Amani
      </p>
    </div>
  );
};
export default Footer;

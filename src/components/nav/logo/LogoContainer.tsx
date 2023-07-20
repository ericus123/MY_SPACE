import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { handleActive } from '../../../redux/slices/navSlice';
import { RootState } from '../../../redux/store';
import styles from './logo.module.scss';

const LogoContainer = ({ customClass }: { customClass?: string }) => {
  const dispatch = useDispatch();

  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  const handleNavItem = (key: string) => {
    dispatch(handleActive('about'));
  };
  return (
    <div
      className={`${styles.logo_container} ${customClass} ${
        !isDarkMode && styles.logo_container_light
      }`}
    >
      <Link rel="preload" href={'/'} style={{ textDecoration: 'none' }}>
        <h1 className={styles.logo} onClick={() => handleNavItem('about')}>
          Amani .
        </h1>
      </Link>
    </div>
  );
};

export default LogoContainer;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleActive, handleMenu } from '../../redux/slices/navSlice';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';
import LogoContainer from './logo/LogoContainer';
import Menu from './menu/Menu';
import MenuItems from './menu_items/MenuItems';
import ThemeToogle from './theme/ThemeToogle';

const NavBar = () => {
  const dispatch = useDispatch();
  const { isDarkMode, isMenuOpen } = useSelector(
    (state: RootState) => state.navBar
  );

  const [top, setTop] = useState(true);

  const handleNavItem = (key: string) => {
    dispatch(handleActive(key));
  };

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const handleHamburger = () => {
    dispatch(handleMenu(!isMenuOpen));
  };

  return (
    <div className={styles.nav}>
      <div className={`${styles.top_layer} ${top ? '' : styles.blur}`} />
      <div className={`${styles.container} ${!isDarkMode && styles.light}`}>
        <div className={styles.header}>
          <LogoContainer />
          <div className={styles.menu_items_main}>
            <MenuItems handleNavItem={handleNavItem} />
          </div>

          <div className={styles.separator}>
            <h3 className={styles.icon}>|</h3>
          </div>
          <div className={styles.theme_toogler}>
            <ThemeToogle />
          </div>
          {!isMenuOpen && (
            <Menu open={isMenuOpen} handleClick={handleHamburger} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

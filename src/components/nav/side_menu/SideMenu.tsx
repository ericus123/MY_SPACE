import { useDispatch, useSelector } from 'react-redux';
import { handleActive, handleMenu } from '../../../redux/slices/navSlice';
import { RootState } from '../../../redux/store';
import LogoContainer from '../logo/LogoContainer';
import Menu from '../menu/Menu';
import MenuItems from '../menu_items/MenuItems';
import ThemeToogle from '../theme/ThemeToogle';
import styles from './side.module.scss';

const SideMenu = () => {
  const { isDarkMode, isMenuOpen } = useSelector(
    (state: RootState) => state.navBar
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleMenu(!isMenuOpen));
  };

  const handleNavItem = (key: string) => {
    dispatch(handleActive(key));
    handleClick();
  };

  return (
    <div
      className={`${styles.side_menu} ${!isDarkMode && styles.side_menu_light}`}
    >
      <div className={styles.left_side}>
        <div className={styles.top}>
          <div
            onClick={() => {
              handleClick();
              handleNavItem('about');
            }}
          >
            <LogoContainer />
          </div>
          <Menu open={isMenuOpen} handleClick={handleClick} />
        </div>
        <div className={styles.bottom}>
          <MenuItems
            handleNavItem={handleNavItem}
            className={styles.side_nav_items}
          />
          <ThemeToogle />
        </div>
      </div>
      <div className={styles.right_side} onClick={handleClick}></div>
    </div>
  );
};

export default SideMenu;

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { navItems } from '../../../constants';
import { RootState } from '../../../redux/store';
import styles from './menuitems.module.scss';

interface INavItem {
  name: string;
  key: string;
}

const MenuItems = ({
  handleNavItem,
  className,
}: {
  handleNavItem: (key: string) => void;
  className?: string;
}) => {
  const { isDarkMode, active, isMenuOpen } = useSelector(
    (state: RootState) => state.navBar
  );

  return (
    <div
      className={`${styles.menu_items} ${
        !isDarkMode && styles.menu_items_light
      }`}
    >
      {navItems?.map(({ name, key }: INavItem) => (
        <Link
          rel="preload"
          href={`/${(key === 'blog' && 'blog') || ''}`}
          style={{
            textDecoration: 'none !important',
            color: `${(isDarkMode && '#161b1e') || 'rgb(210, 209, 209)'}`,
          }}
          key={Math.random()}
          className={styles.it}
        >
          <h3
            className={`${styles.item} ${active === key && styles.active}`}
            key={Math.random()}
            onClick={() => handleNavItem(key)}
          >
            {name}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;

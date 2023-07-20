import Hamburger from 'hamburger-react';
import styles from './menu.module.scss';
const Menu = ({ open, handleClick }: { open: boolean; handleClick }) => {
  return (
    <div className={styles.menu}>
      <Hamburger toggled={open} toggle={handleClick} />
    </div>
  );
};

export default Menu;

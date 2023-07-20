import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../redux/slices/navSlice';
import { RootState } from '../../../redux/store';
import styles from './theme.module.scss';

const ThemeToogle = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(changeTheme(!isDarkMode));
  };

  return (
    <div className={styles.theme} onClick={handleTheme}>
      <div
        className={styles.icon}
        title={(isDarkMode && 'light mode') || 'dark mode'}
      >
        {(!isDarkMode && '☀️') || '🌚'}
      </div>
    </div>
  );
};

export default ThemeToogle;

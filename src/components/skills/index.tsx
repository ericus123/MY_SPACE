import FadeIn from 'react-fade-in';
import { useSelector } from 'react-redux';
import { skills } from '../../constants';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

const SkillsPage = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <FadeIn className={`${styles.skills} ${!isDarkMode && styles.light}`}>
      {skills?.map(({ icon, title, description }) => (
        <div className={styles.skill} key={Math.random()}>
          <div className={styles.icon_container}>
            <span className={styles.icon}>{icon}</span>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </FadeIn>
  );
};

export default SkillsPage;

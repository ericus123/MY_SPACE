import styles from "./index.module.scss";

const AboutProject = ({
  about,
  isDarkMode,
}: {
  about: string;
  isDarkMode: boolean;
}) => {
  return (
    <div className={styles.aboutContainer}>
      <h2
        className={`${styles.title} ${
          !isDarkMode ? styles.title_light : styles.title_dark
        }`}
      >
        About
      </h2>
      <p
        className={`${styles.about} ${
          !isDarkMode ? styles.about_light : styles.about_dark
        }`}
      >
        {about}
      </p>
    </div>
  );
};

export default AboutProject;

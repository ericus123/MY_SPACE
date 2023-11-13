import Link from "next/link";
import styles from "./index.module.scss";

const ProjectDocumentation = ({
  link,
  isDarkMode,
}: {
  link: string;
  isDarkMode: boolean;
}) => {
  return (
    <div className={styles.docContainer}>
      <h2
        className={`${styles.title} ${
          !isDarkMode ? styles.title_light : styles.title_dark
        }`}
      >
        Documentation
      </h2>
      <p
        className={`${styles.about} ${
          !isDarkMode ? styles.about_light : styles.about_dark
        }`}
      >
        Documentation, installation guidance and other info about this project
        can be found{" "}
        <Link href={link} target="_blank" className={styles.link}>
          here
        </Link>
      </p>
    </div>
  );
};

export default ProjectDocumentation;

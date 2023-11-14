import Link from "next/link";
import { FaGithub, FaStar } from "react-icons/fa";
import styles from "./index.module.scss";
const GithubView = ({
  link,
  isDarkMode,
}: {
  link: string;
  isDarkMode: boolean;
}) => {
  return (
    <Link
      href={link}
      style={{
        textDecoration: "none",
      }}
      target="_blank"
    >
      <div className={styles.githubContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            gap: "5px",
            paddingTop: "10px",
          }}
        >
          <p
            className={`${styles.about} ${
              !isDarkMode ? styles.about_light : styles.about_dark
            }`}
          >
            If you liked this project you can{" "}
          </p>
          <FaStar
            color="gold"
            style={{
              width: 20,
              height: 20,
            }}
          />{" "}
          <p
            className={`${styles.about} ${
              !isDarkMode ? styles.about_light : styles.about_dark
            }`}
          >
            it on github
          </p>
        </div>
        <div className={styles.github}>
          <FaGithub
            style={{
              width: 28,
              height: 28,
              color: isDarkMode ? "rgb(210, 209, 209)" : "#161b1e",
            }}
          />

          <h3
            className={`${styles.text} ${!isDarkMode ? styles.text_light : ""}`}
          >
            View it on github
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default GithubView;

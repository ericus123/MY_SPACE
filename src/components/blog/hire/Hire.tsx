import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from "./index.module.scss";

const OpenForHire = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🌟 Open for Opportunities! 🚀</h2>
      <p
        className={`${styles.description} ${
          isDarkMode ? styles.description_dark : ""
        }`}>
        I am currently available for new opportunities. Let&apos;s collaborate
        and create something amazing together! ✨
      </p>
      <Link
        href={"https://www.linkedin.com/in/amanieric"}
        target="_blank"
        style={{
          textDecoration: "none"
        }}>
        <button className={styles.btn}>Hire Me</button>
      </Link>
    </div>
  );
};

export default OpenForHire;

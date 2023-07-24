import Image from "next/image";
import FadeIn from "react-fade-in";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from "./index.module.scss";

const ProfileCard = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <div
      className={`${styles.profile_card} ${
        !isDarkMode && styles.light_profile_card
      }`}
    >
      <div
        className={styles.image_container}
        style={{
          height: "5rem",
          width: "5rem",
          position: "relative",
        }}
      >
        <Image
          src="https://files.amanieric.com/uploads/amani_1a04f899d8.webp"
          alt=""
          className={styles.image}
          priority
          objectFit="cover"
          fill
        />
      </div>
      <div className={styles.details_container}>
        <h1 className={styles.title}>AMANI Eric </h1>
        <span className={styles.role}>FullStack Engineer</span>
      </div>

      <FadeIn className={styles.socials}>
        <div className={styles.account}>
          <a
            href="https://twitter.com/amaniericus"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="#1DA1F2" />
          </a>
        </div>
        <div className={styles.account}>
          <a
            href="https://www.linkedin.com/in/amanieric"
            target="_blank"
            className={styles.link}
            rel="noopener noreferrer"
          >
            <FaLinkedinIn color="#0077b5" />
          </a>
        </div>
        <div className={styles.account}>
          <a
            href="https://github.com/ericus123"
            target="_blank"
            className={styles.link}
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <FaGithub color={(!isDarkMode && "#161b1e") || "gray"} />
          </a>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProfileCard;

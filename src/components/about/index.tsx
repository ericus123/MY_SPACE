import Image from "next/image";
import FadeIn from "react-fade-in";
import { useSelector } from "react-redux";
import { images } from "../../constants/images";
import { RootState } from "../../redux/store";
import styles from "./index.module.scss";

const AboutPage = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);
  return (
    <FadeIn className={`${styles.container} ${!isDarkMode && styles.light}`}>
      <div className={styles.profile}>
        <div
          style={{
            width: "7.5rem",
            height: "7.5rem",
            position: "relative",
          }}
        >
          <Image
            src={images.profile}
            alt=""
            className={styles.profile_img}
            priority
            fill
            objectFit="cover"
          />
        </div>

        <h2 className={styles.introduction}> 👋🏾 Hi,I&apos;m Amani</h2>
      </div>
      <div className={styles.details}>
        <div className={styles.role}>
          <p className={styles.text}>
            Crafting Great Digital Products And Xperiences
          </p>
        </div>
        <div className={styles.titles}>
          Fullstack Engineer <span className={styles.separator}>|</span> IoT
          <span className={styles.separator}>|</span> DAPP
        </div>
        <div className={styles.connect}>
          <a
            href="https://www.linkedin.com/in/amanieric"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <a
              style={{ textDecoration: "none" }}
              href={process.env.NEXT_PUBLIC_RESUME}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className={styles.btn}>Resume</button>
            </a>
          </a>
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutPage;
import useOutsideClick from "@rooks/use-outside-click";
import { useRef, useState } from "react";
import FadeIn from "react-fade-in";
import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./index.module.scss";

const Contact = () => {
  const [show, setShow] = useState<boolean>(false);
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  const handleContact = () => {
    setShow(!show);
  };

  const ref: any = useRef(null);

  const handleOutSideClick = () => {
    setShow(false);
  };
  useOutsideClick(ref, handleOutSideClick);

  return (
    <div
      className={`${styles.contact} ${!isDarkMode && styles.light}`}
      ref={ref}
    >
      {show && (
        <FadeIn className={styles.socials}>
          <div className={styles.account}>
            <a
              href="https://twitter.com/amaniericus"
              target="_blank"
              className={styles.link}
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
              href="https://dev.to/ericus123"
              target="_blank"
              className={styles.link}
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <FaDev color={(!isDarkMode && "#161b1e") || "gray"} />
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

          <div className={styles.account}>
            <a
              href="mailto:amaniericus@gmail.com"
              target="_blank"
              className={styles.link}
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <FaEnvelope color={(!isDarkMode && "#161b1e") || "gray"} />
            </a>
          </div>
        </FadeIn>
      )}
      <div className={styles.action} onClick={handleContact}>
        <FaUser
          className={styles.icon}
          color={(!isDarkMode && "#161b1e") || "#c0c0c0"}
        />
      </div>
      <div className={styles.resume}>
        <button className={styles.resume_btn}>Resume</button>
      </div>
    </div>
  );
};
export default Contact;

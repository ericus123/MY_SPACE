import { useRouter } from "next/router";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "./index.module.scss";

const SocialShare = () => {
  const { asPath } = useRouter();

  return (
    <div className={styles.social_container}>
      <div className={styles.t_icon_container}>
        <a
          target="_blank"
          href={`http://www.twitter.com/share?url=${process.env.NEXT_PUBLIC_FRONTEND_URL}${asPath}`}
          rel="noopener noreferrer"
        >
          <FaTwitter className={styles.t_icon} />
        </a>
      </div>

      <div className={styles.f_icon_container}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_FRONTEND_URL}${asPath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={styles.f_icon} />
        </a>
      </div>

      <div className={styles.l_icon_container}>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_FRONTEND_URL}${asPath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={styles.l_icon} />
        </a>
      </div>
    </div>
  );
};

export default SocialShare;

import { ReactNode } from "react";
import styles from "./index.module.scss";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.home_container}>{children}</div>;
};

export default HomeLayout;

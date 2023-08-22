import { useSelector } from 'react-redux';
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import NavBar from "../../components/nav/NavBar";
import SideMenu from "../../components/nav/side_menu/SideMenu";
import { RootState } from "../../redux/store";
import styles from "./index.module.scss";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, isMenuOpen } = useSelector(
    (state: RootState) => state.navBar
  );

  return (
    <div className={styles.root_layout}>
      {isMenuOpen && <SideMenu />}
      <div className={`${styles.app_layout} ${!isDarkMode && styles.light}`}>
        <NavBar />
        <Contact />
        <div className={styles.wrapper}>
          <div className={styles.children}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

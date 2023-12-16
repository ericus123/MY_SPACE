import { motion as Motion } from "framer-motion";
import { useSelector } from "react-redux";
import { images } from "../../constants/images";
import { RootState } from "../../redux/store";

const AppLoader = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <div
      style={{
        background: isDarkMode ? "#161b1e" : "rgb(241, 241, 241)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        zIndex: 999,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Motion.img
        src={isDarkMode ? images.logo : images.logoDark}
        alt="Logo"
        style={{ width: 80, height: 80 }}
        animate={{
          opacity: [1, 0.7, 1, 0.7, 1],
          scale: [1, 1.1, 1.2, 1.1, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AppLoader;

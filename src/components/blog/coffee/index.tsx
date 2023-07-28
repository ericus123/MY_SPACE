import KofiButton from "kofi-button";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from "./index.module.scss";

const BuyMeCoffee = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <div className={styles.coffee}>
      <p
        className={`${styles.coffee_text} ${
          !isDarkMode && styles.light_coffee_text
        }`}
      >
        ☕️ Like the blog? Support it with a coffee! Your contribution fuels
        upgrades and new content. Let&apos;s code together! 🚀 Thank you! 🙏😊
      </p>

      <KofiButton
        title="Support this blog"
        kofiID="amanieric"
        color="#2978a0"
      />
    </div>
  );
};

export default BuyMeCoffee;

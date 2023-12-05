import { useDispatch, useSelector } from "react-redux";
import { handleSearchTag } from "../../../redux/slices/searchSlice";
import { RootState } from "../../../redux/store";
import styles from "./tags.module.scss";

const BlogSearchTags = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);
  const { activeTags } = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();
  const handleTag = (tag: string) => {
    dispatch(handleSearchTag(tag));
  };
  return (
    <div className={`${isDarkMode && styles.dark}`}>
      <div className={`${styles.tags} `}>
        {[
          "CSS",
          "C/C++",
          "SCSS",
          "Next",
          "TypeScript",
          "Electronics",
          "HTML",
          "JavaScript",
          "Node",
          "React",
          "IoT",
          "Security",
          "Nginx",
          "Database"
        ].map((tag: string) => (
          <h3
            key={Math.random()}
            className={`${styles.tag} ${
              activeTags.includes(tag) && styles.active_tag
            }`}
            onClick={() => handleTag(tag)}>
            {tag}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default BlogSearchTags;

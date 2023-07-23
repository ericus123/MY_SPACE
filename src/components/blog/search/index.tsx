import { useDispatch, useSelector } from "react-redux";
import {
  handleBlogsSearch,
  handleQueryChange,
} from "../../../redux/slices/blogSlice";
import { clearSearchTags } from "../../../redux/slices/searchSlice";
import { RootState } from "../../../redux/store";
import BlogSearchTags from "./BlogSearchTags";
import styles from "./index.module.scss";

const SearchPanel = () => {
  const { activeTags } = useSelector((state: RootState) => state.search);
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);
  const { blogs } = useSelector((state: RootState) => state.blog);

  const dispatch = useDispatch();

  const handleSearchText = ({ target }: { target: HTMLInputElement }) => {
    if (activeTags) {
      dispatch(clearSearchTags());
    }
    dispatch(handleQueryChange(target?.value));
    const data = blogs?.filter((blog) => {
      const query = target.value?.trim().toLowerCase() || "";

      return blog?.attributes?.title?.trim().toLowerCase().includes(query);
    });

    dispatch(handleBlogsSearch(data));
  };
  return (
    <div className={`${styles.search} ${isDarkMode && styles.dark}`}>
      <div className={styles.search_bar}>
        <h1 className={styles.search_text}>Search</h1>
        <input
          type="search"
          className={styles.input}
          onChange={handleSearchText}
        />
      </div>
      <BlogSearchTags />
    </div>
  );
};

export default SearchPanel;

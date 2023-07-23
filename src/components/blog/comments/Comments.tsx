import Giscus from "@giscus/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Comments = ({ term }: { term: string }) => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <Giscus
      id="comments"
      repo="ericus123/BLOG_COMMENT_SYSTEM"
      repoId="R_kgDOIvURPg"
      category="Announcements"
      categoryId="DIC_kwDOIvURPs4CTeKm"
      mapping="url"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={isDarkMode ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
};

export default Comments;

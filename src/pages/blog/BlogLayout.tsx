"use client";

import { useRouter } from "next/router";
import { ReactNode } from "react";
import AdBanner from "../../components/ads";
import ProfileCard from "../../components/blog/cards/ProfileCard";
import SearchPanel from "../../components/blog/search";
import styles from "./index.module.scss";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className={styles.blog_layout}>
      <div className={styles.top_side}>
        {router.route == "/blog" && <SearchPanel />}
      </div>

      <div className={styles.bottom_side}>
        {children}

        <ProfileCard />
        <AdBanner
          data-ad-slot="7434970023"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export default BlogLayout;

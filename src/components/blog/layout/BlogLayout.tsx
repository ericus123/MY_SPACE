"use client";

import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import GoToTop from "react-scroll-to-top";
import { RootState } from "../../../redux/store";
import AdBanner from "../../ads";
import ProfileCard from "../cards/ProfileCard";
import SearchPanel from "../search";
import styles from "./index.module.scss";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  return (
    <div className={styles.blog_layout}>
      {router.route == "/blog" ? (
        <div className={styles.top_side}>
          <div
            style={
              {
                // border: "1px solid red"
              }
            }>
            <AdBanner
              data-ad-slot="7434970023"
              data-ad-format="fluid"
              data-full-width-responsive="true"
            />
          </div>
          <SearchPanel />
          <div
            style={
              {
                // border: "1px solid yellow"
              }
            }>
            <AdBanner
              data-ad-slot="7434970023"
              data-ad-format="fluid"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      ) : null}

      <div className={styles.bottom_side}>
        {children}

        <ProfileCard />
        <AdBanner
          data-ad-slot="7434970023"
          data-ad-format="fluid"
          data-full-width-responsive="true"
        />
      </div>
      <GoToTop
        smooth
        style={{
          right: "20px",
          bottom: "20px",
          background: isDarkMode ? "gray" : "#161b1e"
        }}
        color={!isDarkMode ? "gray" : "#161b1e"}
        top={800}
      />
      {/* <Pagination /> */}
    </div>
  );
};

export default BlogLayout;

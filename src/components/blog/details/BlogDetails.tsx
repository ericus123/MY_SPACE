import { dateToTimeStamp } from "@/helpers";
import Image from "next/image";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import image from "../../../../public/assets/images/profile.jpg";
import BlogContent from "../../../pages/blog/[slug]/content";
import { RootState } from "../../../redux/store";
// import BlogComponent from './BlogComponent';
import ReactHtmlParser from "react-html-parser";
import readingTime from "reading-time";
import { BlogAttributes } from "../../../types/Blog";
import CustomImage from "../../images/CustomImage";
import BuyMeCoffee from "../coffee";
import Comments from "../comments/Comments";
import SocialShare from "../share/SocialShare";
import styles from "./index.module.scss";

const BlogDetails = ({ blog, id }: { blog: BlogAttributes; id: string }) => {
  const updated = dateToTimeStamp(blog?.updatedAt);

  const created = dateToTimeStamp(blog?.createdAt);

  const isUpdated = updated > created;
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);
  const image_url = `${process.env.NEXT_PUBLIC_FILES_DOMAIN}${blog?.image?.data?.attributes?.path}`;
  const img_caption = blog?.image?.data?.attributes?.caption;

  const { minutes } = readingTime(blog.content);

  // const components = { BlogComponent };
  return (
    <div className={`${styles.details} ${!isDarkMode && styles.light}`}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{blog?.title}</h1>
      </div>
      <div className={styles.author}>
        <div className={styles.left}>
          <CustomImage
            className={styles.image}
            src={image}
            alt=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.name}>AMANI Eric</h2>

          <p className={styles.timestamp}>
            <Moment format="MMM Do YYYY" date={blog?.createdAt} />
            &nbsp;|&nbsp;
            <span className={styles.readingTime}>
              {Math.round(minutes)} {Math.round(minutes) > 1 ? "mins" : "min"}{" "}
              read
            </span>
          </p>
        </div>
      </div>
      <div className={styles.picture}>
        <Image
          className={styles.image}
          src={image_url}
          alt=""
          priority
          objectFit="cover"
          layout="fill"
        />
      </div>
      {img_caption && (
        <div className={styles.caption}>
          {ReactHtmlParser(img_caption || "")}
        </div>
      )}

      <div className={styles.content}>
        <BlogContent content={blog?.content} />
      </div>
      <BuyMeCoffee />
      <SocialShare />
      {<Comments term={blog.title} />}
    </div>
  );
};

export default BlogDetails;

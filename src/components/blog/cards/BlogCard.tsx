import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { BlogAttributes } from "../../../types/Blog";
import CustomImage from "../../images/CustomImage";
import styles from "./index.module.scss";

const BlogCard = ({ blog }: { blog: BlogAttributes }) => {
  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  const image_url = `${process.env.NEXT_PUBLIC_FILES_DOMAIN}${blog.image.data.attributes.path}`;
  return (
    <div className={`${styles.card} ${!isDarkMode && styles.light}`}>
      <div className={styles.blog_image_container}>
        <Link
          rel="preload"
          href={`/blog/${blog.slug}`}
          key={Math.random()}
          style={{ textDecoration: "none" }}
        >
          <CustomImage
            src={image_url}
            alt=""
            priority
            fill
            style={{
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </Link>
      </div>

      <div className={styles.title_container}>
        <Link
          href={`/blog/${blog.slug}`}
          key={Math.random()}
          style={{ textDecoration: "none" }}
        >
          <h1 className={styles.title}>{blog?.title}</h1>
        </Link>
        <span className={styles.icon}></span>
      </div>
      {/* <div className={styles.description_container}>
        <p className={styles.descripion}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div> */}
      <div className={styles.tags_container}>
        {blog?.tags?.map((tag) => (
          <div className={styles.tag} key={Math.random()}>
            <h3 className={styles.text}>{tag}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;

import BlogCard from './BlogCard';
import styles from './index.module.scss';

const BlogCards = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className={styles.blog}>
      {/* Coming soon 🚀 */}
      {blogs?.map((blog) => (
        <BlogCard key={Math.random()} blog={blog?.attributes} />
      ))}
    </div>
  );
};

export default BlogCards;

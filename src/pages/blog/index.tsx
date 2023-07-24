import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCards from "../../components/blog/cards/BlogCards";
import { handleBlogsSearch, saveBlogs } from "../../redux/slices/blogSlice";
import { RootState } from "../../redux/store";
import { Blog, Blog as TBlog } from "../../types/Blog";
import { MetaData } from "../../types/MetaData";
import BlogLayout from "./BlogLayout";

export const getServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URI;

  const headers = {
    "content-type": "application/json",
  };
  const requestBody = {
    query: `query ($state: PublicationState, $sort: [String]){
      blogs(publicationState: $state, sort: $sort){
              data{
                id
                  attributes {
                      title
                      content,
                    tags,
                    createdAt,
                    updatedAt,
                    slug,
                    publishedAt,
                    content
                    image {
                    data {
                      attributes {
                        path:url
                        caption
                      }
                    }
                  }
                  }
              }
      }
    }`,
    variables: {
      state: "LIVE",
      sort: ["createdAt:desc"],
    },
  };
  const options = {
    method: "POST",
    url,
    headers,
    data: requestBody,
  };
  const response = await axios(options);

  const frontendURL = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const pro_image = process.env.NEXT_PUBLIC_PRO_IMAGE;

  const meta = [
    {
      property: "og:image",
      content: pro_image,
      key: "ogimage",
    },
    {
      property: "og:url",
      content: `${frontendURL}/blog`,
      key: "ogurl",
    },
    {
      property: "og:image:secure_url",
      content: `${frontendURL}/blog`,
      key: "ogimagesecureurl",
    },
    {
      property: "og:title",
      content: "AMANI Eric | Blog",
      key: "ogtitle",
    },
    {
      property: "og:description",
      content:
        "Home for programming tutorials . I mainly use Node, Next, TypeScript and other technologies to help developers solve isssues they meet with and perform to the best of their abilities",
      key: "ogdesc",
    },
    {
      property: "og:type",
      content: "website",
      key: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
      key: "twitter:card",
    },
    {
      name: "twitter:domain",
      content: "amanieric.com",
      key: "twitter:domain",
    },
    {
      name: "twitter:url",
      content: `${frontendURL}/blog`,
      key: "twitter:card",
    },
    {
      name: "twitter:title",
      content: "AMANI Eric | Blog",
      key: "twitter:title",
    },

    {
      name: "twitter:description",
      content:
        "Home for programming tutorials. I mainly use Node, Next, TypeScript and other technologies to help developers solve isssues they meet with and perform to the best of their abilities",
      key: "twitter:description",
    },
    {
      name: "twitter:image",
      content: pro_image,
      key: "twitter:image",
    },
  ];
  return {
    props: {
      res: response.data,
      meta,
    },
  };
};

const Blog = ({
  res,
  meta,
}: {
  res: {
    data: {
      blogs: {
        data: TBlog[];
      };
    };
  };
  meta: MetaData[];
}) => {
  const dispatch = useDispatch();

  const { blogs, searchBlogs, query } = useSelector(
    (state: RootState) => state.blog
  );
  const { activeTags } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(saveBlogs(res?.data?.blogs?.data || []));
    dispatch(handleBlogsSearch(res?.data?.blogs?.data || []));
  }, [res?.data?.blogs?.data]);

  useEffect(() => {
    if (activeTags.length) {
      const tagPosts: Blog[] = [];

      blogs.map((blog) => {
        const _tags = blog?.attributes?.tags;
        _tags.map((_tag: string) => {
          const isFound = activeTags.some(
            (_active) => _active.toLowerCase() === _tag.toLowerCase()
          );
          const alreadyExist = tagPosts.some(
            (post) => post.attributes.slug === blog.attributes.slug
          );
          if (isFound && !alreadyExist) {
            tagPosts.push(blog);
          }
        });
      });
      dispatch(handleBlogsSearch(tagPosts));
    }
    if (!activeTags.length && !query?.length) {
      dispatch(handleBlogsSearch(res?.data?.blogs?.data));
    }
  }, [activeTags]);

  return (
    <div>
      <Head>
        {/* Meta tags */}
        <title>AMANI Eric | Blog</title>
        {meta.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}
      </Head>
      <BlogLayout>
        <BlogCards blogs={searchBlogs} />
      </BlogLayout>
    </div>
  );
};
export default Blog;

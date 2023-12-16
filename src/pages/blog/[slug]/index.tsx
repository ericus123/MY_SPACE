import axios from "axios";
import BlogDetails from "../../../components/blog/details/BlogDetails";
import BlogLayout from "../../../components/blog/layout/BlogLayout";
import { BlogAttributes } from "../../../types/Blog";

export const getServerSideProps = async (context: {
  params: { slug: any };
}) => {
  const slug = context.params.slug;
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URI;

  const headers = {
    "content-type": "application/json",
    Authorization: `Bearer`
  };

  const requestBody = {
    query: `query ($filters: BlogFiltersInput,
      $state: PublicationState){
      blogs(filters: $filters,
        publicationState: $state){
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
      filters: {
        slug: {
          eq: slug
        }
      },
      state: "LIVE"
    }
  };
  const options = {
    method: "POST",
    url,
    headers,
    data: requestBody
  };
  const response = await axios(options);

  if (!response.data?.data?.blogs?.data?.length) {
    return {
      redirect: {
        permanent: true,
        destination: "/404"
      }
    };
  }

  const blog = response.data.data.blogs.data[0].attributes;
  const frontendURL = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const image_url = `${process.env.NEXT_PUBLIC_FILES_DOMAIN}${blog?.image?.data?.attributes?.path}`;

  const meta = [
    {
      property: "og:image",
      content: image_url,
      key: "ogimage"
    },
    {
      property: "og:url",
      content: `${frontendURL}/blog/${slug}`,
      key: "ogurl"
    },
    {
      property: "og:image:secure_url",
      content: image_url,
      key: "ogimagesecureurl"
    },
    {
      property: "og:title",
      content: blog.title,
      key: "ogtitle"
    },
    {
      property: "og:description",
      content: blog.content.replace(/(<([^>]+)>)/gi, "").substr(0, 250) + "...",
      key: "ogdesc"
    },
    {
      property: "og:type",
      content: "website",
      key: "website"
    },
    {
      property: "article:published_time",
      content: new Date(blog.publishedAt).toISOString(),
      key: "articlepublishedtime"
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
      key: "twitter:card"
    },
    {
      name: "twitter:domain",
      content: "amanieric.com",
      key: "twitter:domain"
    },
    {
      name: "twitter:url",
      content: `${frontendURL}/blog/${slug}`,
      key: "twitter:card"
    },
    {
      name: "twitter:title",
      content: blog.title,
      key: "twitter:title"
    },
    {
      name: "twitter:description",
      content: blog.content.replace(/(<([^>]+)>)/gi, "").substr(0, 250) + "...",
      key: "twitter:description"
    },
    {
      name: "twitter:image",
      content: image_url,
      key: "twitter:image"
    }
  ];

  return {
    props: {
      blog: response.data.data.blogs.data[0].attributes,
      id: response.data.data.blogs.data[0].id,
      slug: slug,
      meta
    }
  };
};

const BlogPost = ({
  blog,
  id
}: {
  blog: BlogAttributes;
  id: string;
  slug: string;
}) => {
  return (
    <>
      <BlogLayout>
        <BlogDetails blog={blog} id={id} />
      </BlogLayout>
    </>
  );
};

export default BlogPost;

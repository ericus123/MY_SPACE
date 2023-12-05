import axios from "axios";
import Head from "next/head";
import BlogDetails from "../../../components/blog/details/BlogDetails";
import BlogLayout from "../../../components/blog/layout/BlogLayout";
import { BlogAttributes } from "../../../types/Blog";
import { MetaData } from "../../../types/MetaData";

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
  const meta: MetaData = {
    og: {
      title: blog.title,
      description:
        blog?.content?.replace(/(<([^>]+)>)/gi, "").substr(0, 250) + "...",
      url: `${frontendURL}/blog/${slug}`,
      image: image_url,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      domain: "https://amanieric.com",
      title: blog.title,
      description:
        blog?.content?.replace(/(<([^>]+)>)/gi, "").substr(0, 250) + "...",
      url: `${frontendURL}/blog/${slug}`,
      image: image_url
    }
  };

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
  id,
  slug,
  meta
}: {
  blog: BlogAttributes;
  id: string;
  slug: string;
  meta: MetaData;
}) => {
  return (
    <>
      <Head>
        {/* Open Graph (OG) tags */}
        <meta property="og:title" content={meta.og.title} />
        <meta property="og:description" content={meta.og.description} />
        <meta property="og:url" content={meta.og.url} />
        <meta property="og:image" content={meta.og.image} />
        <meta property="og:type" content={meta.og.type} />

        {/* Twitter card tags */}
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:domain" content={meta.twitter.domain} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <meta name="twitter:url" content={meta.twitter.url} />
        <meta name="twitter:image" content={meta.twitter.image} />
      </Head>
      <BlogLayout>
        <BlogDetails blog={blog} id={id} />
      </BlogLayout>
    </>
  );
};

export default BlogPost;

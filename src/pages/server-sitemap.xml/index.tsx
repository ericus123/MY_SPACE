import axios from "axios";
import { ISitemapField, getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps = async (ctx: any) => {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URI;
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  const headers = {
    "content-type": "application/json",
  };
  const requestBody = {
    query: `query{
        blogs{
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
  };
  const options = {
    method: "POST",
    url,
    headers,
    data: requestBody,
  };

  const response = await axios(options);

  const blogData = response.data.data.blogs.data;
  let _fields: ISitemapField[] = [];
  if (Array.isArray(blogData)) {
    _fields = blogData.map(
      (blog: { attributes: { slug: any; updatedAt: any } }) => ({
        loc: `${baseUrl}/blog/${blog.attributes.slug}`,
        lastmod: blog.attributes.updatedAt,
        changefreq: "daily",
      })
    );
  }

  return getServerSideSitemapLegacy(ctx, _fields);
};

export default function Site() {}

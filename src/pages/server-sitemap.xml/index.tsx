import axios from "axios";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx: ISitemapField[]) => {
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
  const fields = response.data.data.blogs.data.map(
    (blog: { attributes: { slug: any; updatedAt: any } }) => ({
      loc: `${baseUrl}/blog/${blog.attributes.slug}`,
      lastmod: blog.attributes.updatedAt,
    })
  );

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}

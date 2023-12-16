export type BlogAttributes = {
  path: string;
  title: string;
  slug: String;
  tags: String[];
  content: string;
  image: {
    data: {
      id: string;
      attributes: {
        name: string;
        caption: string;
        url: string;
        path: string;
      };
    };
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Blog = {
  id: string;
  attributes: {
    content: {
      data: {
        attributes: BlogAttributes;
      };
    };
    image: {
      data: {
        id: string;
        attributes: {
          name: string;
          caption: string;
          url: string;
          path: string;
        };
      };
    };
    title: String;
    slug: String;
    tags: JSON;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

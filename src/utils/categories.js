import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API);

export const getCategorySlugs = async () => {
  const { categories } = await graphcms.request(
    `{
      categories {
        slug
      }
    }`
  );

  return categories.map(({ slug }) => {
    return {
      params: {
        category: slug,
      },
    };
  });
};

export const getSingleCategory = async (slug) => {
  const { category } = await graphcms.request(
    `
  query SingleCategory($slug: String!) {
    category(where: {slug: $slug}) {
      categoryImage {
        fileName
        height
        url(transformation: {image: {resize: {width: 1280}}})
        width
      }
      slug
      name
      posts(orderBy: createdAt_DESC) {
        author {
          name
        }
        excerpt
        featuredImage {
          height
          width
          url(transformation: {image: {resize: {width: 1280}}})
          fileName
        }
        title
        slug
        id
        createdAt
      }
    }
  }
  
  `,
    {
      slug,
    }
  );

  return category;
};

export const getCategoryList = async () => {
  const { categories } = await graphcms.request(
    `
  {
    categories {
      id
      categoryImage {
        height
        url(transformation: {image: {resize: {width: 1280}}})
        width
        fileName
      }
      name
      slug
    }
  }`
  );

  return categories;
};

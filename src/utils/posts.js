import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API);

export const getPostSlugs = async () => {
  const { posts } = await graphcms.request(`
  {
    posts {
      slug
      category {
        slug
      }
    }
  }`);

  return posts.map(({ slug, category }) => {
    return {
      params: {
        category: category.slug,
        slug,
      },
    };
  });
};

export const getSinglePost = async (slug) => {
  const { post } = await graphcms.request(
    `
  query SinglePost($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        name
      }
      category {
        name
        slug
      }
      content
      createdAt
      excerpt
      featuredImage {
        height
        id
        url(transformation: {image: {resize: {width: 1280}}})
        width
      }
      title
      id
      slug
    }
  }
  
  `,
    {
      slug,
    }
  );

  return post;
};

export const getRelatedPosts = async (category) => {
  const { posts } = await graphcms.request(
    `
    query RelatedPosts($slug: String!) {
      posts(where: {category: {slug: $slug}}) {
        excerpt
        featuredImage {
          fileName
          height
          width
          url(transformation: {image: {resize: {width: 1280}}})
        }
        slug
        title
        author {
          name
        }
        category {
          slug
          name
        }
      }
    }
  
  `,
    {
      slug: category,
    }
  );

  return posts;
};

export const getRecentPosts = async () => {
  const { posts } = await graphcms.request(`
  {
    posts(orderBy: createdAt_DESC, first: 5) {
      title
      author {
        name
      }
      createdAt
      id
      slug
      excerpt
      featuredImage {
        url(transformation: {image: {resize: {width: 1280}}})
        fileName
        id
      }
      category {
        name
        slug
      }
    }
  } 
  `);

  return posts;
};

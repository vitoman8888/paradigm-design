import Head from 'next/head';

import {
  getSingleCategory,
  getCategoryList,
  getCategorySlugs,
} from '../../utils/categories';

const Category = ({ title, categoryData, categoryList }) => {
  return (
    <div>
      <Head>
        <title>{title} - paradigm.</title>
      </Head>
      <main>
        <pre>{JSON.stringify(categoryData, null, 2)}</pre>
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getCategorySlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const categoryData = await getSingleCategory(params.category);
  const categoryList = await getCategoryList();

  return {
    props: {
      title: categoryData.name,
      categoryData,
      categoryList,
    },
  };
};

export default Category;

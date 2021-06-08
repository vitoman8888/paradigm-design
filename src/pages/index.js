import Head from 'next/head';

import { getRecentPosts } from '../utils/posts';
import { getCategoryList } from '../utils/categories';

const Home = ({ recentPosts, categoryList }) => {
  return (
    <div>
      <Head>
        <title>paradigm. a tech news blog.</title>
      </Head>
      <main>
        <pre>{JSON.stringify(recentPosts, null, 2)}</pre>
        <pre>{JSON.stringify(categoryList, null, 2)}</pre>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const recentPosts = await getRecentPosts();
  const categoryList = await getCategoryList();
  return {
    props: {
      recentPosts,
      categoryList,
    },
  };
};

export default Home;

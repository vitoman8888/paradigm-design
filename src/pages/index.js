import Head from 'next/head';
import Footer from '../components/Footer';
import NewsletterBanner from '../components/NewsletterBanner';
import Header from '../components/Header';

import { getRecentPosts } from '../utils/posts';
import { getCategoryList } from '../utils/categories';

const Home = ({ recentPosts, categoryList }) => {
  return (
    <div>
      <Head>
        <title>paradigm. a tech news blog.</title>
      </Head>
      <Header categoryList={categoryList} />
      <main>
        <pre>{JSON.stringify(recentPosts, null, 2)}</pre>
        <NewsletterBanner />
        <pre>{JSON.stringify(categoryList, null, 2)}</pre>
      </main>
      <Footer />
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

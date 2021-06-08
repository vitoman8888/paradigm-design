import Head from 'next/head';
import Footer from '../components/Footer';
import NewsletterBanner from '../components/NewsletterBanner';
import Header from '../components/Header';
import CategoryCards from '../components/CategoryCards';
import HomeArticles from '../components/HomeArticles';

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
        <HomeArticles posts={recentPosts} />
        <NewsletterBanner />
        <CategoryCards categoryList={categoryList} />
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

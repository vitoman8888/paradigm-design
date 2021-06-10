import Head from 'next/head';
import Footer from '../components/Footer';
import NewsletterBanner from '../components/NewsletterBanner';
import Header from '../components/Header';
import CategoryCards from '../components/CategoryCards';
import HomeArticles from '../components/HomeArticles';
import { motion } from 'framer-motion';

import { getRecentPosts } from '../utils/posts';
import { getCategoryList } from '../utils/categories';

const variants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      delay: 0.35,
      when: 'beforeChildren',
    },
  },
  exit: {
    y: 150,
    opacity: 0,
    transition: { duration: 0.35, when: 'afterChildren' },
  },
};

const Home = ({ recentPosts, categoryList }) => {
  return (
    <motion.div
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
    >
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
    </motion.div>
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

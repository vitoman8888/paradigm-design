import Head from 'next/head';
import Footer from '../../components/Footer';
import NewsletterBanner from '../../components/NewsletterBanner';
import Header from '../../components/Header';
import CategoryBanner from '../../components/CategoryBanner';
import CategoryArticles from '../../components/CategoryArticles';
import { motion } from 'framer-motion';

import {
  getSingleCategory,
  getCategoryList,
  getCategorySlugs,
} from '../../utils/categories';

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

const Category = ({ title, categoryData, categoryList }) => {
  return (
    <motion.div
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
    >
      <Head>
        <title>{title} - paradigm.</title>
      </Head>
      <Header categoryList={categoryList} />
      <main>
        <CategoryBanner title={categoryData.name} image={categoryData.categoryImage.url} />
        <CategoryArticles posts={categoryData.posts} categorySlug={categoryData.slug} />
        <NewsletterBanner />
      </main>
      <Footer />
    </motion.div>
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

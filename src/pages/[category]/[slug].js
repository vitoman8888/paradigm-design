import Head from 'next/head';
import Footer from '../../components/Footer';
import NewsletterBanner from '../../components/NewsletterBanner';
import Header from '../../components/Header';
import SingleArticleBanner from '../../components/SingleArticleBanner';
import SingleArticleContent from '../../components/SingleArticleContent';
import { motion } from 'framer-motion';
import SingleArticleRelated from '../../components/SingleArticleRelated';

import {
  getPostSlugs,
  getSinglePost,
  getRelatedPosts,
} from '../../utils/posts';
import { getCategoryList } from '../../utils/categories';

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

const Article = ({ postData, categoryList, relatedPosts }) => {
  return (
    <motion.div
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
    >
      <Head>
        <title>{postData.title} - paradigm.</title>
      </Head>
      <Header categoryList={categoryList} />
      <main>
        <SingleArticleBanner
          featuredImage={postData.featuredImage}
          title={postData.title}
          excerpt={postData.excerpt}
        />
        <SingleArticleContent
          author={postData.author.name}
          content={postData.content}
          category={postData.category}
        />
        <NewsletterBanner />
        <SingleArticleRelated posts={relatedPosts} />
      </main>
      <Footer />
    </motion.div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const relatedPosts = await getRelatedPosts(params.category);
  const postData = await getSinglePost(params.slug);
  const categoryList = await getCategoryList();

  return {
    props: {
      relatedPosts,
      postData,
      categoryList,
    },
  };
};

export default Article;

import Head from 'next/head';
import Footer from '../../components/Footer';
import NewsletterBanner from '../../components/NewsletterBanner';
import Header from '../../components/Header';

import {
  getPostSlugs,
  getSinglePost,
  getRelatedPosts,
} from '../../utils/posts';
import { getCategoryList } from '../../utils/categories';

const Article = ({ postData, categoryList, relatedPosts }) => {
  return (
    <div>
      <Head>
        <title>{postData.title} - paradigm.</title>
      </Head>
      <Header categoryList={categoryList} />
      <main>
        <pre>{JSON.stringify(postData, null, 2)}</pre>
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
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

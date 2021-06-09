import Link from 'next/link';
import Image from 'next/image';
import styles from './categoryArticles.module.scss';

const CategoryArticles = ({ posts = [], categorySlug }) => {
  return (
    <section className={styles['categoryArticles']}>
      <div className={styles['categoryArticles__grid']}>
        {posts.length === 0 && <h3>No articles in this category!</h3>}

        {posts.map(({ author, title, slug, featuredImage, excerpt }) => (
          <article className={styles['categoryArticles__gridItem']} key={slug}>
            <Link href={`/${categorySlug}/${slug}`}>
              <div className={styles['categoryArticles__image']}>
                <Image
                  src={featuredImage.url}
                  alt={title}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
              </div>
            </Link>
            <div className={styles['categoryArticles__details']}>
              <Link href={`/${categorySlug}/${slug}`}>
                <a>
                  <h3>{title}</h3>
                </a>
              </Link>
              <h4>Author: {author.name}</h4>
              <p>{excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryArticles;
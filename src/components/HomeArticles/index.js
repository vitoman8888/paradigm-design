import Link from 'next/link';
import Image from 'next/image';
import styles from './homeArticles.module.scss';

const HomeArticles = ({ posts }) => {
    return (
        <section className={styles['homeArticles']}>
        <div className={styles['homeArticles__grid']}>
          {posts.map(
            ({ author, title, category, slug, featuredImage, excerpt }) => (
              <article className={styles['homeArticles__gridItem']} key={slug}>
                <Link href={`/${category.slug}/${slug}`}>
                  <a>
                    <div className={styles['homeArticles__imgWrapper']}>
                      <Image
                        className={styles[`homeArticles__img`]}
                        src={featuredImage.url}
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                      />
                    </div>
                    <div className={styles[`homeArticles__itemDetails`]}>
                      <div className={styles[`homeArticles__itemDetailsInner`]}>
                        <span className={styles['homeArticles__itemCategory']}>
                          {category.name}
                        </span>
  
                        <h2 className={styles['homeArticles__itemTitle']}>
                          {title}
                        </h2>
                        <span className={styles['homeArticles__itemAuthor']}>
                          Written by: {author.name}
                        </span>
                        <p className={styles['homeArticles__itemExcerpt']}>
                          {excerpt}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </article>
            )
          )}
        </div>
      </section>  
    );
};
  
export default HomeArticles;
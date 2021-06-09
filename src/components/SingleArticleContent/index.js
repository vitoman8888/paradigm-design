import styles from './singleArticleContent.module.scss';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import ImageWrapper from '../ImageWrapper';
import Code from '../Code';

const SingleArticleContent = ({ author, content, category }) => {
  return (
    <section className={styles['articleContent']}>
      <div className={styles['articleContent__wrapper']}>
        <aside className={styles['articleContent__side']}>
          <div className={styles['articleContent__info']}>
            <div className={styles['articleContent__author']}>
              <span>Written by:</span> {author}
            </div>
            <div className={styles['articleContent__category']}>
              <span>Posted in:</span>{' '}
              <Link href={`/${category.slug}`}>
                <a className={styles['articleContent__link']}>
                  {category.name}
                </a>
              </Link>
            </div>
          </div>
        </aside>
        <div className={styles['articleContent__post']}>
            <article>
            <Markdown
                options={{
                    overrides: {
                        img: {
                            component: ImageWrapper,
                        },
                        pre: {
                            component: Code,
                        },
                    },
                }}
            >
                {content}
            </Markdown>
            </article>
        </div>
      </div>
    </section>
  );
};

export default SingleArticleContent;
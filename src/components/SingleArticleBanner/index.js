import styles from './singleArticleBanner.module.scss';
import Image from 'next/image';

const SingleArticleBanner = ({ featuredImage, excerpt, title }) => {
  return (
    <section>
      <div className={styles['singleArticleBanner']}>
        <div className={styles['singleArticleBanner__imageWrapper']}>
          <Image
            src={featuredImage.url}
            alt={title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className={styles['singleArticleBanner__details']}>
          <div className={styles['singleArticleBanner__detailsInner']}>
            <h2 className={styles['singleArticleBanner__title']}>{title}</h2>
            <p className={styles['singleArticleBanner__excerpt']}>{excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleArticleBanner;
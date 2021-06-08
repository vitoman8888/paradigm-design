import styles from './newsletterBanner.module.scss';

const NewsletterBanner = () => {
  return (
    <section className={styles['banner']}>
      <div className={styles['banner__wrapper']}>
        <h2 className={styles['banner__heading']}>Sign up for notifications</h2>
        <h3 className={styles['banner__subtext']}>
          The latest content, delivered to you.
        </h3>
        <form className={styles['banner__form']}>
          <input
            className={styles['banner__formInput']}
            type='email'
            placeholder='Your email address'
            aria-label='Email address'
          />
          <button className={styles['banner__formBtn']}>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
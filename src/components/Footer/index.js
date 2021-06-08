import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <div className={styles['footer__itemInfo']}>
          <h4>paradigm.</h4>
          <p>
            The fine folks here at Paradigm thank you for taking interest in our
            content. We love the Internet and take pleasure in contributing as
            much as we can to make it a better place.
          </p>
        </div>

        <small className={styles['footer__itemCopyright']}>
          {new Date().getFullYear()} paradigm. a media company
        </small>
      </div>
    </footer>
  );
};

export default Footer;

import styles from './categoryCards.module.scss';
import Link from 'next/link';

const CategoryCards = ({ categoryList = [] }) => {
    return (
      <section className={styles['categoryCards']}>
        <div className={styles['categoryCards__grid']}>
          {categoryList.map(({ slug, name, categoryImage }) => {
            return (
              <Link key={slug} href={`/${slug}`}>
                <a
                  className={styles['categoryCards__gridItem']}
                  style={{ backgroundImage: `url(${categoryImage.url})` }}
                >
                  <div className={styles['categoryCards__gridItemInner']}>
                    <span className={styles['categoryCards__title']}>{name}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </section>
    );
  };

  export default CategoryCards;
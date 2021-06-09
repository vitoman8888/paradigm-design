import Image from 'next/image';
import styles from './categoryBanner.module.scss';

const CategoryBanner = ({ title, image }) => {
  return (
    <section className={styles['categoryBanner']}>
      <div className={styles['categoryBanner__wrapper']}>
        <Image
          alt={title}
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default CategoryBanner;
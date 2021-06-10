import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { motion } from 'framer-motion'; 

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      X: { stiffness: 50, velocity: 2 },
      y: { stiffness: 50, velocity: 2 },
    },
  },
  closed: {
    x: -15,
    opacity: 0,
    transition: {
      y: { stiffness: 50 },
      X: { stiffness: 50 },
    },
  },
};

const Header = ({ categoryList = [] }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <motion.header 
        className={styles['header']}
        animate={open ? 'open' : 'closed'}
      >
        <div className={styles['header__wrapper']}>
          <div className={styles['header__itemLeft']}>

          <button
            aria-label='Toggle Menu'
            className={styles['header__menuBtn']}
            onClick={() => setOpen(!open)}
          >
            <svg width='40' height='40' viewBox='0 0 20 20'>
              <motion.path
                fill='transparent'
                strokeWidth='3'
                stroke='#ffffff'
                strokeLinecap='round'
                variants={{
                  closed: { d: 'M 2 2.5 L 18 2.5' },
                  open: { d: 'M 3 16.5 L 17 2.5' },
                }}
              />
              <motion.path
                fill='transparent'
                strokeWidth='3'
                stroke='#ffffff'
                strokeLinecap='round'
                d='M 2 9.423 L 18 9.423'
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                fill='transparent'
                strokeWidth='3'
                stroke='#ffffff'
                strokeLinecap='round'
                variants={{
                  closed: { d: 'M 2 16.346 L 18 16.346' },
                  open: { d: 'M 3 2.5 L 17 16.346' },
                }}
              />
            </svg>
          </button>
          </div>
          <div className={styles['header__itemCenter']}>
            <Link href='/'>
              <a className={styles['header__title']}>paradigm.</a>
            </Link>
          </div>
        </div>
  
        <div
            className={`${styles['header__menu']} ${
                open ? styles['header__menu--open'] : styles['header__menu--closed']
            }`}
        >
          <motion.nav className={styles['header__nav']} variants={menuVariants}>
            {categoryList.map(({ slug, name }) => (
              <Link key={slug} href={`/${slug}`}>
                <motion.a
                  variants={linkVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles['header__navlink']}
                  onClick={() => setOpen(false)}
                >
                  {name}
                </motion.a>
              </Link>
            ))}
          </motion.nav>
        </div>
      </motion.header>
    );
  };
  
  export default Header;
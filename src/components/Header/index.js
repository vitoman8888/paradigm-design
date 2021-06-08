import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = ({ categoryList = [] }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <header className={styles['header']}>
        <div className={styles['header__wrapper']}>
          <div className={styles['header__itemLeft']}>
          <button
            aria-label='Toggle Menu'
            className={styles['header__menuBtn']}
            onClick={() => setOpen(!open)}
            >
            <svg width='40' height='40' viewBox='0 0 23 23'>
                {open ? (
                <g>
                    <path
                    fill='transparent'
                    strokeWidth='3'
                    stroke='white'
                    strokeLinecap='round'
                    d='M 3 16.5 L 17 2.5'
                    />
                    <path
                    fill='transparent'
                    strokeWidth='3'
                    stroke='white'
                    strokeLinecap='round'
                    d='M 3 2.5 L 17 16.346'
                    />
                </g>
                ) : (
                <g>
                    <path
                    fill='transparent'
                    strokeWidth='3'
                    stroke='white'
                    strokeLinecap='round'
                    d='M 2 2.5 L 20 2.5'
                    />

                    <path
                    fill='transparent'
                    strokeWidth='3'
                    stroke='white'
                    strokeLinecap='round'
                    d='M 2 9.423 L 20 9.423'
                    />
                    <path
                    fill='transparent'
                    strokeWidth='3'
                    stroke='white'
                    strokeLinecap='round'
                    d='M 2 16.346 L 20 16.346'
                    />
                </g>
                )}
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
            <nav className={styles['header__nav']}>
                {categoryList.map(({ slug, name }) => (
                <Link key={slug} href={`/${slug}`}>
                    <a
                    className={styles['header__navlink']}
                    onClick={() => setOpen(false)}
                    >
                    {name}
                    </a>
                </Link>
                ))}
            </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
'use client';

import Link from 'next/link';

import styles from './style.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <Image
        src='/logo.svg'
        width={34}
        height={34}
        alt='logo'
      />
      <nav className={styles.navigation}>
        <Link
          className={currentRoute === '/' ? styles.activeLink : styles.link}
          href="/"
        >
          Countries
        </Link>
        <Link
          className={currentRoute === '/about' ? styles.activeLink : styles.link}
          href="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;

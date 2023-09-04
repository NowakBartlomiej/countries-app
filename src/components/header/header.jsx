'use client'

import Link from "next/link";

import styles from "./style.module.scss";
import { usePathname } from 'next/navigation';

const Header = () => {
  const currentRoute = usePathname();
  
  return (
    <header className={styles.navigation}>
          <Link className={currentRoute === '/' ? styles.activeLink : styles.link} href="/">Home</Link> 
          <Link className={currentRoute === '/about' ? styles.activeLink : styles.link} href="/about">About</Link>
          <Link className={currentRoute === '/countries' ? styles.activeLink : styles.link} href="/countries">Countries</Link>
    </header>
  );
}

export default Header

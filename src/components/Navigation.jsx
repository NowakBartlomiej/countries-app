'use client'

import Link from "next/link";

import styles from "@styles/navigation.module.css";
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const currentRoute = usePathname();
  
  return (
    <div className={styles.navigation}>
          <Link className={currentRoute === '/' ? styles.activeLink : styles.link} href="/">Home</Link>
        
          <Link className={currentRoute === '/about' ? styles.activeLink : styles.link} href="/about">About</Link>
        
          <Link className={currentRoute === '/countries' ? styles.activeLink : styles.link} href="/countries">Countries</Link>
    </div>
  );
};

export default Navigation;

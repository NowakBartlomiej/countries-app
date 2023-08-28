import React from 'react'
import styles from '../../styles/countries.module.css'

import Link from 'next/link'

export const metadata = {
    title: 'Countries List',
    description: 'This is the country list page',
    category: 'education',
    keywords: ['geography', 'countries', 'country', 'map', 'education'],
    icons: {
      icon: 'logo.png',
    }
}

const Page = () => {
  return (
    <section>
        <h1 className={styles.header}>Countries List</h1>

        <div className={styles.list}>
          <Link href={`/countries/Poland`} className={styles.link}>Poland</Link>

          <Link href={`/countries/France`} className={styles.link}>France</Link>

          <Link href={`/countries/Belgium`} className={styles.link}>Belgium</Link>
        </div>
    </section>
  )
}

export default Page
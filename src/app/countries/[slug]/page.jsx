'use client'

import styles from '../../../styles/country.module.css'

import { useRouter } from 'next/navigation'

export const metadata = {
  title: 'Countries List',
  description: 'This is the country page',
  category: 'education',
  keywords: ['geography', 'countries', 'country', 'map', 'education'],
  icons: {
    icon: 'logo.png',
  }
}

const Page = ({params}) => {
  const router = useRouter();
  
  return (
    <section>
        <h1><span className={styles.span}>Country: </span> {params.slug}</h1>

        <div onClick={() => router.back()} className={styles.button}>Go back</div>
    </section>
  )
}

export default Page
'use client'

import styles from '../../../styles/country.module.css'

import { useRouter } from 'next/navigation'

export const metadata = {
    title: 'Countries'
}

const page = ({params}) => {
  const router = useRouter();
  
  return (
    <section>
        <h1><span className={styles.span}>Country: </span> {params.slug}</h1>

        <div onClick={() => router.back()} className={styles.button}>Go back</div>
    </section>
  )
}

export default page
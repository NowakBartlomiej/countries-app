import styles from '../../styles/about.module.css'

export const metadata = {
    title: 'About',
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
        <p className={styles.text}>About Page</p>
    </section>
  )
}

export default Page
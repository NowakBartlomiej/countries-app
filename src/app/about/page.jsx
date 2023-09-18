import styles from './style.module.scss';

export const metadata = {
  title: 'About',
  description: 'This is the country list page',
  category: 'education',
  keywords: ['geography', 'countries', 'country', 'map', 'education'],
  icons: {
    icon: 'logo.svg',
  },
};

const Page = () => {
  return (
    <section>
      <p className={styles.text}>About Page</p>
    </section>
  );
};

export default Page;

import styles from './style.module.scss';

export const metadata = {
  title: 'Countries List',
  description: 'This is the country page',
  category: 'education',
  keywords: ['geography', 'countries', 'country', 'map', 'education'],
  icons: {
    icon: 'logo.svg',
  },
};

const Page = ({ params }) => {

  return (
    <section>
      <p className={styles.text}>
        <span className={styles.span}>Country:</span>
        {params.slug}
      </p>
    </section>
  );
};

export default Page;

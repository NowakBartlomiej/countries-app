'use client';

import styles from './style.module.scss';

import { useRouter } from 'next/navigation';

const Page = ({ params }) => {
  const router = useRouter();

  return (
    <section>
      <p className={styles.text}>
        <span className={styles.span}>Country:</span>
        {params.slug}
      </p>
      <div onClick={() => router.back()} className={styles.button}>
        Go back
      </div>
    </section>
  );
};

export default Page;

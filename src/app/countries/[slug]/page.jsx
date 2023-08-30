"use client";

import styles from "@styles/country.module.css";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "Countries List",
  description: "This is the country page",
  category: "education",
  keywords: ["geography", "countries", "country", "map", "education"],
  icons: {
    icon: "logo.svg",
  },
};

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

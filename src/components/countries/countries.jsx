'use client';

import useCountries from '@/hooks/useCountries';
import Card from '../card/card';
import styles from './styles.module.scss'

const Countries = () => {
  const { data } = useCountries({
    filters: ['name', 'capital', 'region', 'flags'],
  });

  return (
    <main className={styles.grid}>
      {data.map((country) => (
        <Card 
          key={country.name.common} 
          image={country.flags.svg}
          country={country.name.common} 
          capital={country.capital}
          continent={country.region}
        />
      ))}
    </main>
  );
};

export default Countries;

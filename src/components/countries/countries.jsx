'use client';

import useCountries from '@/hooks/useCountries';
import Card from '../card/card';
import styles from './styles.module.scss'

const Countries = ({ search, activeContinent, sort }) => {
  const { data } = useCountries({
    filters: ['name', 'capital', 'region', 'flags', 'subregion'],
  });

  return (
    <main className={styles.grid}>
      {data
      .filter((country) => {
        return search.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(search)
      })
      .sort((a, b) => {
        if (sort == "Z-A") {
          if (a.name.common > b.name.common) {
            return -1;
          }
          if (a.name.common < b.name.common) {
            return 1;
          }
          return 0
        }
        if (sort == "A-Z") {
          if (a.name.common > b.name.common) {
            return 1;
          }
          if (a.name.common < b.name.common) {
            return -1;
          }
          return 0
        }
      })
      .filter((country) => {
        if (activeContinent == "All") {
          return country
        }
        else if (country.region == "Americas") {
          return country.subregion == activeContinent && country
        }
        else {
          return country.region == activeContinent && country
        }
      })
      .map((country) => (
        <Card
          key={country.name.common}
          image={country.flags.svg}
          country={country.name.common}
          capital={country.capital}
          continent={country.region} 
          subregion={country.subregion}
        />
      ))}
    </main>
  );
};

export default Countries;

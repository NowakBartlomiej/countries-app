'use client'

import { useState } from 'react'
import styles from './style.module.scss'
import { continents } from '@utils/continents'
import Countries from '../countries/countries'


const Options = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(continents);
  const [activeContinent, setActiveContinent] = useState('All');
  const [sort, setSort] = useState('default');

  const handleActiveContinent = (continentName) => {
    const tempArray = data.map(d => {
      if (d.name == continentName) {
        setActiveContinent(d.name);
        return {...d, isActive: true}
      } else {
        return {...d, isActive: false};
      }
    })

    setData(tempArray);
  }

  return (
    <>
      <section className={styles.options}>
        <select onChange={(e) => setSort(e.target.value)} className={styles.select} name="" id="">
          <option value="default">Default</option>
          <option value="A-Z">Sort by name A-Z</option>
          <option value="Z-A">Sort by name Z-A</option>
        </select>
        <div className={styles.continents}>
          {data.map((continent) => (
            <p onClick={() => handleActiveContinent(continent.name)} key={continent.name} className={continent.isActive ? styles.activeContinent : styles.continent}>{continent.name}</p>
          ))}
        </div>
        <input onChange={(e) => setSearch(e.target.value)} type='search' className={styles.input} placeholder='search...' />
      </section>
      <Countries search={search} activeContinent={activeContinent} sort={sort}/>
    </>
  )
}

export default Options
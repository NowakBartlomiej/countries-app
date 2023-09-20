import styles from './style.module.scss'
import Image from 'next/image'
import {continents} from '@utils/continents'

const Options = () => {
  console.log(continents)
  return (
    <section className={styles.options}>
        <select className={styles.select} name="" id="">
            <option value="">Sort by name A-Z</option>
            <option value="">Sort by name Z-A</option>
        </select>
        <div className={styles.continents}>
            {/* <p className={styles.activeContinent}>All</p>
            <p className={styles.continent}>Africa</p>
            <p className={styles.continent}>Asia</p> */}
            {continents.map((continent) => (
              <p key={continent.name} className={continent.isActive ? styles.activeContinent : styles.continent}>{continent.name}</p>
            ))}
        </div>
        
    
        <input type='search' className={styles.input} placeholder='search...'/>
        
    </section>
  )
}

export default Options
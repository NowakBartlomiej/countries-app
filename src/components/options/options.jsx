import styles from './style.module.scss'
import { continents } from '@utils/continents'

const Options = () => {
  return (
    <section className={styles.options}>
      <select className={styles.select} name="" id="">
        <option value="">Sort by name A-Z</option>
        <option value="">Sort by name Z-A</option>
      </select>
      <div className={styles.continents}>
        {continents.map((continent) => (
          <p key={continent.name} className={continent.isActive ? styles.activeContinent : styles.continent}>{continent.name}</p>
        ))}
      </div>
      <input type='search' className={styles.input} placeholder='search...' />
    </section>
  )
}

export default Options
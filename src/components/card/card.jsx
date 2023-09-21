import Image from "next/image"
import styles from "./style.module.scss"

const Card = ({ country, capital, continent, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={image}
          alt="Flag"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.country}>{country}</h2>
        <h3 className={styles.capital}>{capital}</h3>
        <div className={styles.continentWrapper}>
          <p className={styles.continent}>{continent}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
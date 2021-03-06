import Image from "next/image"
import Link from "next/link"

import styles from "./HomeCard.module.scss"

export default function Card({ name, slug, lecturer, hours, image }) {
  return (
    <div className={styles.course}>
      <Image
        className={styles.course__image}
        src={image}
        alt={`${name} course image`}
        width={480}
        height={300}
        objectFit="cover"
      />

      <h2 className={styles.course__name}>{name}</h2>
      <p className={styles.course__lecturer}>Lecturer: Dr. {lecturer}</p>
      <p className={styles.course__hours}>Credit Hours: {hours}</p>
      <Link href={`/${slug}`}>
        <a className={styles.course__button}>View Materials</a>
      </Link>
    </div>
  )
}

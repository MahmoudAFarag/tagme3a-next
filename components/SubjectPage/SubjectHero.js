import Link from "next/link"
import styles from "./SubjectHero.module.scss"

export default function SubjectHero({ subjectName }) {
  return (
    <>
      <Link href="/">
        <a className={styles.backButton}>Back to Home</a>
      </Link>
      <div className={styles.header}>
        <h1 className={styles.header__title}>{subjectName}</h1>
      </div>
    </>
  )
}

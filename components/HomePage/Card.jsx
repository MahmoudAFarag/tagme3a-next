import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.course}>
      <Image
        className={styles.course__image}
        src="/images/phyto.jpg"
        alt="PhytoChemistry Image"
        width={480}
        height={300}
        objectFit="cover"
      />
      <h2 className={styles.course__name}>PhytoChemistry</h2>
      <p className={styles.course__lecturer}>Lecturer: Dr.Soaad Taema</p>
      <p className={styles.course__hours}>Credit Hours: 3</p>
      <Link href="#">
        <a className={styles.course__button}>View Materials</a>
      </Link>
    </div>
  );
}

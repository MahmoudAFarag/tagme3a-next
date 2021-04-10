import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>تجميعة</h1>
      <p className={styles.header__description}>😉 محاضراتك و سكشانك عندنا</p>
    </div>
  );
}

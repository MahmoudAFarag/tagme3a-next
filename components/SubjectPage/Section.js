export default function Section({ styles, sectionUrl, children }) {
  return (
    <div className={styles.week__material}>
      <svg className={styles.week__material_icon}>
        <use xlinkHref="/sprite.svg#icon-lab" />
      </svg>
      <a
        rel="noopener noreferrer"
        href={sectionUrl}
        target="_blank"
        className={styles.week__material_link}
      >
        {children}
      </a>
    </div>
  )
}

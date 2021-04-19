export default function Timetable({ styles, timetable }) {
  return (
    <div className={styles.week__material}>
      <svg className={styles.week__material_icon}>
        <use xlinkHref="/sprite.svg#icon-table2" />
      </svg>
      <a
        rel="noopener noreferrer"
        href={timetable}
        target="_blank"
        className={styles.week__material_link}
      >
        timetable
      </a>
    </div>
  )
}

export default function Lecture({ styles, weekNum, lectureUrl, lectureUrl2 }) {
  function handleSelection(event) {
    if (event.target.value === "choose") return false
    location = event.target.value
  }

  return (
    <div className={styles.week__material}>
      <svg className={styles.week__material_icon}>
        <use xlinkHref="/sprite.svg#icon-display" />
      </svg>
      {lectureUrl2 ? (
        <select
          className={styles.week__material_sectionDropDown}
          onChange={handleSelection}
        >
          <option
            value="choose"
            className={styles.week__material_sectionDropDown_opt}
          >
            Lecture {weekNum}
          </option>
          <option
            value={lectureUrl}
            className={styles.week__material_sectionDropDown_opt}
          >
            Part 1
          </option>
          <option
            value={lectureUrl2}
            className={styles.week__material_sectionDropDown_opt}
          >
            Part 2
          </option>
        </select>
      ) : (
        <a
          rel="noopener noreferrer"
          href={lectureUrl}
          target="_blank"
          className={styles.week__material_link}
        >
          Lecture {weekNum}
        </a>
      )}
    </div>
  )
}

export default function LecturePDF({ styles, lecturePDF, lecturePDF2 }) {
  function handleSelection(event) {
    if (event.target.value === "choose") return false
    location = event.target.value
  }

  return (
    <div className={styles.week__material}>
      <svg className={styles.week__material_icon}>
        <use xlinkHref="/sprite.svg#icon-file-pdf" />
      </svg>
      {lecturePDF2 ? (
        <select
          className={styles.week__material_sectionDropDown}
          onChange={handleSelection}
        >
          <option
            value="choose"
            className={styles.week__material_sectionDropDown_opt}
          >
            Lecture PDF
          </option>
          <option
            value="https://www.youtube.com/watch?v=1FA18Anjr6Y"
            className={styles.week__material_sectionDropDown_opt}
          >
            Part 1
          </option>
          <option
            value="https://www.youtube.com/watch?v=cQC9uF0O540"
            className={styles.week__material_sectionDropDown_opt}
          >
            Part 2
          </option>
        </select>
      ) : (
        <a
          rel="noopener noreferrer"
          href={lecturePDF}
          target="_blank"
          className={styles.week__material_link}
        >
          Lecture PDF
        </a>
      )}
    </div>
  )
}

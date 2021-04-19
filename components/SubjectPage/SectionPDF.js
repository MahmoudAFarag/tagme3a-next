export default function SectionPDF({ styles, sectionPDF }) {
  function handleSelection(event) {
    if (event.target.value === "choose") return false
    location = event.target.value
  }

  return (
    <div className={styles.week__material}>
      <svg className={styles.week__material_icon}>
        <use xlinkHref="/sprite.svg#icon-file-pdf" />
      </svg>

      <a
        rel="noopener noreferrer"
        href={sectionPDF}
        target="_blank"
        className={styles.week__material_link}
      >
        Section PDF
      </a>
    </div>
  )
}

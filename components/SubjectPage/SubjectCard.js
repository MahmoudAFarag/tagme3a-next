import styles from "./SubjectCard.module.scss"
import Lecture from "./week-materials/Lecture"
import LecturePDF from "./week-materials/LecturePDF"

import Section from "./week-materials/Section"
import Timetable from "./week-materials/Timetable"

export default function SubjectCard({
  weekNum,
  lectureUrl,
  lectureUrl2,
  lecturePDF,
  lecturePDF2,
  sectionUrl,
  timetable,
}) {
  return (
    <>
      <div className={styles.week}>
        <h1 className={styles.week__num}>Week {weekNum}</h1>
        <Lecture
          styles={styles}
          weekNum={weekNum}
          lectureUrl={lectureUrl}
          lectureUrl2={lectureUrl2}
        />

        <LecturePDF
          styles={styles}
          lecturePDF={lecturePDF}
          lecturePDF2={lecturePDF2}
        />

        <Section styles={styles} sectionUrl={sectionUrl}>
          Section {weekNum}
        </Section>

        <Timetable styles={styles} timetable={timetable} />
      </div>
    </>
  )
}

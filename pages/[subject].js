import { useRouter } from "next/router"
import Head from "next/head"

import fetchWeeks from "utils/fetchWeeks"

import styles from "@components/SubjectPage/SubjectCard.module.scss"
import SubjectHero from "@components/SubjectPage/SubjectHero"
import Lecture from "@components/SubjectPage/Lecture"
import LecturePDF from "@components/SubjectPage/LecturePDF"
import Section from "@components/SubjectPage/Section"
import SectionPDF from "@components/SubjectPage/SectionPDF"
import Timetable from "@components/SubjectPage/Timetable"

export default function SubjectWeek({ weeks }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Tagme3a - {router.query.subject}</title>
      </Head>
      <SubjectHero subjectName={router.query.subject} />
      <div className="weeks">
        {weeks.map((week) => (
          <div className={styles.week} key={week.weekNumber}>
            <h1 className={styles.week__num}>Week {week.weekNumber}</h1>
            <Lecture
              styles={styles}
              weekNum={week.weekNumber}
              lectureUrl={week.lectureUrl}
              lectureUrl2={week.lectureUrl2}
            />
            <LecturePDF
              styles={styles}
              lecturePDF={week.lecturePdf}
              lecturePDF2={week.lecturePdf2}
            />
            <Section styles={styles} sectionUrl={week.sectionUrl}>
              Section {week.weekNumber}
            </Section>
            <SectionPDF styles={styles} sectionPDF={week.sectionPdf} />
            <Timetable styles={styles} timetable={week.timetable} />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const data = await fetchWeeks(context.params.subject.toLowerCase())

  return {
    props: {
      weeks:
        data.medicinalWeekCollection?.items ||
        data.qualityWeekCollection?.items ||
        data.kineticsWeekCollection?.items ||
        data.technoWeekCollection?.items ||
        data.communityWeekCollection?.items ||
        data.microWeekCollection?.items ||
        data.aidWeekCollection?.items,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { subject: "Medicinal" } },
      { params: { subject: "Quality" } },
      { params: { subject: "Kinetics" } },
      { params: { subject: "Techno" } },
      { params: { subject: "Community" } },
      { params: { subject: "Micro" } },
      { params: { subject: "Aid" } },
    ],
    fallback: false,
  }
}

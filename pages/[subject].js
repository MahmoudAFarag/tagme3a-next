import Head from "next/head"
import { useRouter } from "next/router"
import { GraphQLClient, gql } from "graphql-request"

import SubjectHero from "@components/SubjectPage/SubjectHero"
import SubjectCard from "@components/SubjectPage/SubjectCard"

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
          <SubjectCard
            key={week.weekNumber}
            weekNum={week.weekNumber}
            lectureUrl={week.lectureUrl}
            lectureUrl2={week.lectureUrl2}
            lecturePDF={week.lecturePdf}
            lecturePDF2={week.lecturePdf2}
            sectionUrl={week.sectionUrl}
            timetable={week.timetable}
          />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const currentSubject = context.params.subject.toLowerCase()
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CDA_TOKEN}`,
    },
  })

  const subjectQuery = gql`
    {
      ${currentSubject}WeekCollection(order: weekNumber_ASC) {
        items {
          weekNumber
          lectureUrl
          lectureUrl2
          lecturePdf
          lecturePdf2
          sectionUrl
          sectionPdf
          ${currentSubject === "micro" ? "spotsUrl" : ""}
          timetable
        }
      }
    }
  `

  const data = await graphQLClient.request(subjectQuery)

  return {
    props: {
      weeks:
        data.medicinalWeekCollection?.items ||
        data.qualityWeekCollection?.items ||
        data.microWeekCollection?.items,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { subject: "Medicinal" } },
      { params: { subject: "Quality" } },
      // { params: { subject: "Kinetics" } },
      // { params: { subject: "Techno" } },
      // { params: { subject: "Community" } },
      { params: { subject: "Micro" } },
      // { params: { subject: "Aid" } }, // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  }
}

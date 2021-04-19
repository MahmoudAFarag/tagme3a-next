import Head from "next/head"
import fetchSubjects from "../utils/fetchSubjects"

import HomeCard from "@components/HomePage/HomeCard"
import HomeHero from "@components/HomePage/HomeHero"

export default function HomePage({ subjects }) {
  return (
    <>
      <Head>
        <title>Tagme3a -- Semester 6</title>
      </Head>
      <HomeHero />
      <div className="subjects">
        {subjects.map((subject) => (
          <HomeCard
            key={subject.id}
            name={subject.name}
            slug={subject.slug}
            lecturer={subject.lecturer}
            hours={subject.creditHours}
            image={subject.image.url}
          />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const subjects = await fetchSubjects()

  return {
    props: {
      subjects,
    },
    revalidate: 60,
  }
}

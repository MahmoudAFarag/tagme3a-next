import { GraphQLClient, gql } from "graphql-request"
import Head from "next/head"

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
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CDA_TOKEN}`,
    },
  })

  const subjectsQuery = gql`
    {
      subjectCollection(order: id_ASC) {
        items {
          id
          name
          slug
          lecturer
          creditHours
          image {
            url
          }
        }
      }
    }
  `

  const { subjectCollection } = await graphQLClient.request(subjectsQuery)

  return {
    props: { subjects: subjectCollection.items },
    revalidate: 60,
  }
}

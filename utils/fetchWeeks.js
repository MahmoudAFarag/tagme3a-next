import { GraphQLClient, gql } from "graphql-request"

export default async function fetchWeeks(currentSubject) {
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

  return await graphQLClient.request(subjectQuery)
}

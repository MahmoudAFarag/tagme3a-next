import { GraphQLClient, gql } from "graphql-request"

export default async function fetchSubjects() {
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

  return subjectCollection.items
}

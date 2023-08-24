import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export default async function getPinnedProjects () {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: 'Bearer TODO'
      }
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
        {
          user(login: "aalexmrt") {
            pinnedItems(first: 4) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    id
                    url
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      `
  })

  const { user } = data
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge)
  console.log('pinnedItems', pinnedItems)

  return {
    props: {
      pinnedItems
    }
  }
}

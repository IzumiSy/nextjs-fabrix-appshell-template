import { defineCRUDResource, gql } from "@izumisy-tailor/fabrix-appshell";

export const query = defineCRUDResource({
  title: "YourQuery",
  category: "Tables",
  listQuery: gql`
    # Example GraphQL query from graphql.org
    query AllFilms {
      allFilms {
        edges {
          node {
            title
            episodeID
            director
            releaseDate
            openingCrawl
          }
        }
      }
    }
  `,
  props: {},
});

import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_BOAT_ENDPOINT;
export const getVlogs = async () => {
  const query = gql`
    query MyQuery {
      vlogsConnection {
        edges {
          node {
            influencer {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            vlogUrl
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              categoryUrl
            }
          }
        }
      }
    }
  `;

  const output = await request(graphqlAPI, query);
  return output.vlogsConnection.edges;
};

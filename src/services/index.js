import { api_endpoint } from "../constants";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const homeSection = async () => {
  const query = gql`
    query Homes {
      homes {
        createdAt
        heading
        homeButton1
        homeButton2
        id
        introductionContent
        publishedAt
        tagline
        updatedAt
      }
    }
  `;
  const responses = await graphQLClient.request(query);
  return responses;
};
export const aboutSection = async () => {
  const query = gql`
    query Abouts {
      abouts {
        aboutHeading
        aboutContent
      }
    }
  `;
  const responses = await graphQLClient.request(query);
  return responses;
};

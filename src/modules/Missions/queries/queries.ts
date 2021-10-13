import { gql } from "@apollo/client";

export const QUERY_GET_MISSIONS = gql`
  query {
    missions {
      id
      name
      manufacturers
    }
  }
`;

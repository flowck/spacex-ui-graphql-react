import { gql } from "@apollo/client";

export const QUERY_GET_ROCKETS = gql`
  query {
    rockets {
      description
      id
      name
    }
  }
`;

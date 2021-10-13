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

export const QUERY_GET_MISSION = gql`
  query GetMission($missionId: ID!) {
    mission(id: $missionId) {
      id
      name
      website
      wikipedia
      description
      manufacturers
    }
  }
`;

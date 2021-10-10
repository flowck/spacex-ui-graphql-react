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

export const QUERY_GET_ROCKET = gql`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      active
      cost_per_launch
      country
      description
      diameter {
        feet
        meters
      }
      first_flight
      height {
        feet
        meters
      }
      id
      mass {
        kg
        lb
      }
      name
      success_rate_pct
      type
      wikipedia
    }
  }
`;

export const QUERY_GET_ROCKETS_LAUNCHES = gql`
  query GetRocketsLaunches($rocketId: String!) {
    launches(find: { rocket_id: $rocketId }) {
      id
      mission_name
      launch_success
      launch_site {
        site_name
      }
      launch_date_utc
    }
  }
`;

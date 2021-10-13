import { useMemo } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { RecordString } from "../../../../common/types";
import { IMission, Mission } from "../../models/Mission";
import { QUERY_GET_MISSION } from "../../queries/queries";
import Loading from "@kiwicom/orbit-components/lib/Loading";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

interface MissionData {
  mission: IMission;
}

export function MissionDetails() {
  const { missionId } = useParams<RecordString>();
  const { loading, error, data } = useQuery<MissionData, RecordString>(QUERY_GET_MISSION, { variables: { missionId } });
  const mission = useMemo<Mission | null>(() => (data ? new Mission(data.mission) : null), [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <>
      <Card spaceAfter="small">
        <CardSection title={mission?.name}>
          <p>{mission?.description}</p>
          <br />
          <span>Useful links: </span>
          <TextLink href={mission?.website}>Website</TextLink>, <TextLink href={mission?.wikipedia}>Wikipedia</TextLink>
        </CardSection>
      </Card>
    </>
  );
}

import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { Launch } from "../../queries/interfaces";
import { LaunchModel } from "../../models/LaunchModel";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import Loading from "@kiwicom/orbit-components/lib/Loading";
import { QUERY_GET_ROCKETS_LAUNCHES } from "../../queries/queries";
import { Table } from "../../../../common/components/Table/Table";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

interface Props {
  name: string;
  rocketId: string;
}

interface LaunchesData {
  launches: Launch[];
}

export function RocketLaunches({ rocketId, name }: Props) {
  const { loading, error, data } = useQuery<LaunchesData>(QUERY_GET_ROCKETS_LAUNCHES, { variables: { rocketId } });
  const launches = useMemo(() => data?.launches.map((launch) => new LaunchModel(launch)) || [], [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Alert type="critical" title="Unfortunately we could not fetch launches associated data." />;
  }

  const columns = [
    { name: "mission", label: "Mission" },
    { name: "date", label: "Date" },
    { name: "site", label: "Site" },
    { name: "status", label: "Status", isTag: true },
  ];

  return (
    <Card title={`${name}'s launches`} spaceAfter="small">
      <CardSection>
        <Table columns={columns} rows={launches}></Table>
      </CardSection>
    </Card>
  );
}

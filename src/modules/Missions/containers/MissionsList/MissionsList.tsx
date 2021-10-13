import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { IMission, Mission } from "../../models/Mission";
import { QUERY_GET_MISSIONS } from "../../queries/queries";
import Loading from "@kiwicom/orbit-components/lib/Loading";
import { Table } from "../../../../common/components/Table/Table";

interface MissionsData {
  missions: IMission[];
}

export function MissionsList() {
  const columns = [
    { name: "name", label: "Name" },
    { name: "manufacturers", label: "Manufacturers" },
  ];
  const { error, loading, data } = useQuery<MissionsData>(QUERY_GET_MISSIONS);
  const missions = useMemo<Mission[]>(() => data?.missions.map((mission) => new Mission(mission)) || [], [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw new Error(error?.message);
  }

  return (
    <>
      <Table rowLink="/missions" columns={columns} rows={missions}></Table>
    </>
  );
}

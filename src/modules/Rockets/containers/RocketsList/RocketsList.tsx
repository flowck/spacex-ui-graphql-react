import { useQuery } from "@apollo/client";
import { QUERY_GET_ROCKETS } from "../../queries/queries";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import { RocketItem } from "../../components/RocketItem";
import Loading from "@kiwicom/orbit-components/lib/Loading";

export function RocketsList() {
  const { loading, data, error } = useQuery<any, any>(QUERY_GET_ROCKETS);

  const renderRocketItems = (rockets: any) => {
    return rockets.map((rocket: any) => <RocketItem key={rocket.id} data={rocket} />);
  };

  return (
    <>
      {loading ? <Loading /> : data && renderRocketItems(data.rockets)}
      {error && <Alert type="critical">Please refresh the page</Alert>}
    </>
  );
}

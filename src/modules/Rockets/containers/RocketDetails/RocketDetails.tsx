import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { Rocket } from "../../queries/interfaces";
import { QUERY_GET_ROCKET } from "../../queries/queries";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import { RecordString } from "../../../../common/types";
import Loading from "@kiwicom/orbit-components/lib/Loading";
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import { RocketLaunches } from "./RocketLaunches";

export function RocketDetails() {
  const { rocketId } = useParams<RecordString>();
  const { data, error, loading } = useQuery(QUERY_GET_ROCKET, { variables: { id: rocketId } });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Alert type="critical" title="Something has happened while trying to fetch data. Please refresh the page." />
    );
  }

  const rocket = data.rocket as Rocket;
  const toUSD = (value: number) => value.toLocaleString("en-US", { currency: "USD", style: "currency" });

  return (
    <>
      <Card title={rocket.name} spaceAfter="small">
        <CardSection>
          <p>
            {rocket.description}
            <br />
            <br />
            Read more on <TextLink href={rocket.wikipedia}>Wikipedia</TextLink>
          </p>
        </CardSection>
      </Card>

      <Card title="Specs" spaceAfter="small">
        <Grid columns="repeat(auto-fit, minmax(200px, 1fr))">
          <CardSection title="Type">{rocket.type}</CardSection>
          <CardSection title="Height">
            {rocket.height.meters}m / {rocket.height.feet}ft
          </CardSection>
          <CardSection title="Mass">
            {rocket.mass.kg}kg / {rocket.mass.lb}lb
          </CardSection>
          <CardSection title="Diameter">
            {rocket.diameter.meters}m / {rocket.diameter.feet}ft
          </CardSection>
        </Grid>
      </Card>

      <Card title="Stats" spaceAfter="small">
        <Grid columns="repeat(auto-fit, minmax(200px, 1fr))">
          <CardSection title="Country">{rocket.country}</CardSection>
          <CardSection title="First flight">{rocket.first_flight}</CardSection>
          <CardSection title="Cost per launch">{toUSD(rocket.cost_per_launch)}</CardSection>
          <CardSection title="Success rate">{rocket.success_rate_pct}%</CardSection>
        </Grid>
      </Card>

      <RocketLaunches name={rocket.name} rocketId={rocketId}></RocketLaunches>
    </>
  );
}

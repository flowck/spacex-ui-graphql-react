import { Rocket } from "../queries/interfaces";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../common/interfaces/index";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

interface Props extends BaseProps {
  data: Rocket;
}

export function RocketItem({ data }: Props) {
  const { name, description, id } = data;
  return (
    <Link to={`/rockets/${id}`} style={{ textDecoration: "none" }}>
      <Card spaceAfter="small">
        <CardSection title={name} description={description} />
      </Card>
    </Link>
  );
}

import { Rocket } from "../store/interfaces";
import { BaseProps } from "../../../common/interfaces/index";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

interface Props extends BaseProps {
  data: Rocket;
}

export function RocketItem({ data }: Props) {
  const { name, description } = data;
  return (
    <Card spaceAfter="small">
      <CardSection title={name} description={description}></CardSection>
    </Card>
  );
}

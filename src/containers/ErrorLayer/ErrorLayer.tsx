import Alert from "@kiwicom/orbit-components/lib/Alert";

export function ErrorLayer() {
  return <Alert type="critical" title="An error has occurred while fetching data. Please refresh the page" />;
}

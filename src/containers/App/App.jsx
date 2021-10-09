import { customTokens } from "../../common/styles/Theme";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";

function App() {
  return (
    <ThemeProvider theme={{ orbit: customTokens }}>
      <main>
        <Heading>Spacex UI</Heading>
      </main>
    </ThemeProvider>
  );
}

export default App;

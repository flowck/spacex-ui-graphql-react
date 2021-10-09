import "../../common/styles/index.css";
import { customTokens } from "../../common/styles/Theme";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import { Header } from "../../common/components/Header/Header";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { RocketsList } from "../../modules/Rockets/containers/RocketsList/RocketsList";

function App() {
  return (
    <ThemeProvider theme={{ orbit: customTokens }}>
      <main>
        <Router>
          <Header></Header>

          <Layout type="MMB">
            <LayoutColumn>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/rockets"></Redirect>
                </Route>
                <Route path="/rockets">
                  <Heading type="title2">Rockets</Heading>
                  <RocketsList></RocketsList>
                </Route>
              </Switch>
            </LayoutColumn>
          </Layout>
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App;

import "../../common/styles/index.css";
import { ApolloProvider } from "@apollo/client";
import { ErrorBoundary } from "react-error-boundary";
import { apolloClient } from "../../common/api/graphql";
import { ErrorLayer } from "../ErrorLayer/ErrorLayer";
import { customTokens } from "../../common/styles/Theme";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import { Header } from "../../common/components/Header/Header";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { RocketsList } from "../../modules/Rockets/containers/RocketsList/RocketsList";
import { MissionsList } from "../../modules/Missions/containers/MissionsList/MissionsList";
import { RocketDetails } from "../../modules/Rockets/containers/RocketDetails/RocketDetails";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={{ orbit: customTokens }}>
        <main>
          <Router>
            <Header></Header>

            <Layout type="MMB">
              <LayoutColumn>
                <ErrorBoundary FallbackComponent={ErrorLayer}>
                  <Switch>
                    <Route exact path="/">
                      <Redirect to="/rockets"></Redirect>
                    </Route>
                    <Route exact path="/rockets">
                      <Heading type="title2" spaceAfter="medium">
                        Rockets
                      </Heading>
                      <RocketsList></RocketsList>
                    </Route>
                    <Route path="/rockets/:rocketId">
                      <RocketDetails></RocketDetails>
                    </Route>
                    <Route>
                      <Heading type="title2" spaceAfter="medium">
                        Missions
                      </Heading>
                      <MissionsList></MissionsList>
                    </Route>
                  </Switch>
                </ErrorBoundary>
              </LayoutColumn>
            </Layout>
          </Router>
        </main>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

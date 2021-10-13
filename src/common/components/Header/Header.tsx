import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import { repository, version } from "../../utils/appVersion";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

const Container = styled.header`
  width: 100%;
  background-color: var(--color-white);
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const AppVersion = styled.span`
  font-size: 12px;
  margin-left: 10px;
`;

export function Header() {
  return (
    <Container>
      <Layout type="MMB">
        <LayoutColumn>
          <Heading>
            <Link style={{ textDecoration: "none", color: "initial" }} to="/">
              Spacex UI
            </Link>
            <AppVersion>
              <TextLink href={`${repository.url}/releases/tag/v${version}`}>v{version}</TextLink>
            </AppVersion>
          </Heading>

          <Nav>
            <LinkList direction="row">
              <NavLink activeClassName="header__nav--active" to="/rockets">
                <TextLink asComponent="span">Rockets</TextLink>
              </NavLink>
              <NavLink activeClassName="header__nav--active" to="/missions">
                <TextLink asComponent="span">Missions</TextLink>
              </NavLink>
              {/* <NavLink activeClassName="header__nav--active" to="/rockets">
                <TextLink asComponent="span">Rockets</TextLink>
              </NavLink> */}
            </LinkList>
          </Nav>
        </LayoutColumn>
      </Layout>
    </Container>
  );
}

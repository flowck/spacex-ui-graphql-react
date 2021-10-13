import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "@kiwicom/orbit-components/lib/Heading";
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

export function Header() {
  return (
    <Container>
      <Layout type="MMB">
        <LayoutColumn>
          <Heading>Spacex UI</Heading>

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

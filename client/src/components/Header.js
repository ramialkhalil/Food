import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";
import Location from "./Location";

const Header = () => {
  return (
    <Wrapper>
      <div></div>
      <NavItem>
        <Nav to="/">Home</Nav>
        <Nav to="/login">Login</Nav>
      </NavItem>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
`;

const Nav = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
`;

export default Header;

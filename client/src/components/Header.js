import { useContext, useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FoodContext } from "./FoodContext";
import Location from "./Location";

const Header = () => {
  const { user, setUser } = useContext(FoodContext);

  const history = useHistory();

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("login");
    history.push("/");
  };
  return (
    <Wrapper>
      <div></div>
      <NavItem>
        <Nav to="/">Home</Nav>
        {user ? (
          <USER>
            <Nav to="/profile">{`Hello, ${user.userName}`}</Nav>
            <div onClick={logOut}>logout</div>
          </USER>
        ) : (
          <Nav to="/login">Login</Nav>
        )}
      </NavItem>
    </Wrapper>
  );
};

const USER = styled.div`
  display: flex;
  gap: 10px;
  & div {
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;
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

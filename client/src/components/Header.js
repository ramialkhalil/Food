import { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FoodContext } from "./FoodContext";
import { MdFoodBank, MdLogout } from "react-icons/md";

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
      <Nav
        to="/"
        style={{ display: "flex", color: "green", alignItems: "center" }}
      >
        <LOGO />
        <div
          style={{
            border: "solid",
            background: "green",
            color: "white",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          FoodAdvisor
        </div>
      </Nav>
      <NavItem>
        {user ? (
          <USER>
            <Nav to="/profile">{`Hello, ${user.userName}`}</Nav>
            <div onClick={logOut} style={{ color: "green" }}>
              <MdLogout />
            </div>
          </USER>
        ) : (
          <Nav
            to="/login"
            style={{
              border: "solid",
              background: "green",
              color: "white",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            Login
          </Nav>
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
  color: green;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
`;

const LOGO = styled(MdFoodBank)`
  font-size: 60px;
`;

export default Header;

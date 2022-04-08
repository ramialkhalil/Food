import { Link } from "react-router-dom";
import styled from "styled-components";
import Location from "./Location";
import Receipes from "./Receipes";

const Home = () => {
  return (
    <Wrapper>
      <DIV>
        <div>Find Top Restaurants In Your City</div>
        <SUBDIV>
          <div>Enter your city name</div>
          <Location />
        </SUBDIV>
      </DIV>
      <DIV>
        <div>Find Top Receipes</div>
        <SUBDIV>
          <div>Enter ingredient name</div>
          <Receipes />
        </SUBDIV>
      </DIV>
    </Wrapper>
  );
};
export default Home;

const SUBDIV = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  gap: 10px;
`;
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 15px;
  margin: 15px;
  width: 50%;
  height: 50vh;
  font-size: 32px;
  font-weight: bold;
  gap: 15px;
  background-color: whitesmoke;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  gap: 15px;
`;

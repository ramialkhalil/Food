import { Link } from "react-router-dom";
import styled from "styled-components";

const Restaurant = ({ element, locationId }) => {
  return (
    <>
      {element.name && (
        <DIV>
          <SUBDIV>
            <img src={element.photo?.images?.small?.url} />
          </SUBDIV>
          <SUBDIV>
            <LINK to={`/find-restaurant/${locationId}/${element.location_id}`}>
              {element.name}
            </LINK>
          </SUBDIV>
          <SUBDIV>
            <b>Rating: </b>
            <div>{element.rating}</div>
          </SUBDIV>
          <SUBDIV>
            <b>reviews: </b>
            <div>{element.num_reviews}</div>
          </SUBDIV>
        </DIV>
      )}
    </>
  );
};
export default Restaurant;

const SUBDIV = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 275px;
  height: 300px;
  background-color: whitesmoke;
`;

const LINK = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
`;

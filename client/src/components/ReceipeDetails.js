import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FoodContext } from "./FoodContext";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

const ReceipeDetails = () => {
  const { AddReceipeToList, user, reload, removeReceipeFromList } =
    useContext(FoodContext);
  const { receipeId } = useParams();
  const [receipe, setReceipe] = useState(null);
  const [inlist, setInlist] = useState(null);

  useEffect(() => {
    fetch(`/api/get-receipe/${receipeId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          setReceipe(result.data.recipe);
        }
      });
  }, []);

  useEffect(() => {
    if (user && receipe) {
      const receipeFilter = user.receipes.filter((element) => {
        return element.label === receipe.label;
      });
      if (!!receipeFilter.length) {
        setInlist("true");
      } else {
        setInlist(null);
      }
    }
  }, [receipe, user, reload]);

  if (!receipe) {
    return <></>;
  }
  return (
    <>
      {receipe ? (
        <Wrapper>
          <Image>
            <IMAGE src={receipe?.images?.SMALL?.url} />
          </Image>
          <BODY>
            <DIV>
              <HEADER>
                <div>{receipe.label}</div>
                {user &&
                  (inlist === "true" ? (
                    <div onClick={() => removeReceipeFromList(receipe)}>
                      <FcLike />
                    </div>
                  ) : (
                    <div onClick={() => AddReceipeToList(receipe)}>
                      <FcLikePlaceholder />
                    </div>
                  ))}
              </HEADER>
            </DIV>
            <DIV>
              <SUBHEADER>Ingredients</SUBHEADER>
              {receipe.ingredients.map((element) => {
                return (
                  <SUBDIV>
                    <li>{element.text}</li>
                  </SUBDIV>
                );
              })}
            </DIV>
            <DIV>
              <SUBHEADER>Details</SUBHEADER>
              <SUBDIV>
                <h3>Calories:</h3>
                <SUBSUBDIV>{receipe.calories.toFixed(2)}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Meal Types:</h3>
                <SUBSUBDIV>
                  {receipe.mealType.map((element) => {
                    return <div>{element}</div>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>Cuisine Types:</h3>
                <SUBSUBDIV>
                  {receipe.cuisineType.map((element) => {
                    return <div>{element}</div>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
            </DIV>
            <DIV>
              <SUBHEADER>Total Nutrients</SUBHEADER>
              <SUBDIV>
                <h3>CA:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.CA.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.CA.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CA.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>CHOCDF:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.CHOCDF.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CHOCDF.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>CHOLE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.CHOLE.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.CHOLE.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CHOLE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>ENERC_KCAL:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.ENERC_KCAL.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.ENERC_KCAL.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FAMS:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FAMS.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FAMS.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAMS.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FAPU:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FAPU.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FAPU.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAPU.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FASAT:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FASAT.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FASAT.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FASAT.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FAT:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FAT.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FAT.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAT.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FATRN:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FATRN.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FATRN.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FATRN.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FE.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FE.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FIBTG:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FIBTG.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FIBTG.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FIBTG.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FOLAC:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FOLAC.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FOLAC.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLAC.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FOLDFE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FOLDFE.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FOLDFE.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLDFE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FOLFD:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FOLFD.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.FOLFD.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLFD.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>K:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.K.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.K.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.K.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>MG:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.MG.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.MG.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.MG.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>NA:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.NA.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.NA.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.NA.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>NIA:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.NIA.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.NIA.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.NIA.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>P:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.P.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.P.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.P.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>PROCNT:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.PROCNT.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.PROCNT.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.PROCNT.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>RIBF:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.RIBF.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.RIBF.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.RIBF.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>SUGAR:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.SUGAR.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.SUGAR.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.SUGAR.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>THIA:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.THIA.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.THIA.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.THIA.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>TOCPHA:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.TOCPHA.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.TOCPHA.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.TOCPHA.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>VITA_RAE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.VITA_RAE.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.VITA_RAE.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.VITA_RAE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>VITB6A:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.VITB6A.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.VITB6A.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.VITB6A.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>VITB12:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.VITB12.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.VITB12.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.VITB12.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>VITC:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.VITC.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.VITC.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.VITC.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>VITK1:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.VITK1.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.VITK1.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.VITK1.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>WATER:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.WATER.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.WATER.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.WATER.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>ZN:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.ZN.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.ZN.quantity.toFixed(2)}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.ZN.unit}</SUBSUBDIV>
              </SUBDIV>
            </DIV>
          </BODY>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};
export default ReceipeDetails;

const IMAGE = styled.img`
  max-width: 50vw;
  max-height: 50vh;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;

const SUBSUBDIV = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 23px;
  font-size: 14px;
`;

const SUBDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const SUBHEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bolder;
  padding-bottom: 5px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8fbc8f;
  margin: 5px;
  padding: 10px;
  padding-left: 40px;
  width: 50%;
  gap: 10px;
  border-radius: 10px;
`;

const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-size: 32px;
  font-weight: bolder;
  padding-bottom: 10px;
`;

const BODY = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

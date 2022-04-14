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

  // useEffect(() => {
  //   const receipes = JSON.parse(sessionStorage.getItem("receipes"));
  //   const receipe = receipes.hits.filter((element) => {
  //     return element.recipe.label === receipeName;
  //   });
  //   if (receipe.length) {
  //     setReceipe(receipe[0].recipe);
  //   }
  // }, []);

  useEffect(() => {
    fetch(`/api/get-receipe/${receipeId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.data) {
          console.log(result.data);
          setReceipe(result.data.recipe);
        }
      });
  }, []);

  useEffect(() => {
    if (user && receipe) {
      const receipeFilter = user.receipes.filter((element) => {
        return element.label === receipe.label;
      });
      console.log(receipeFilter);
      if (!!receipeFilter.length) {
        setInlist("true");
      } else {
        setInlist(null);
      }
    }
  }, [receipe, user, reload]);

  console.log(receipe);
  if (!receipe) {
    return <></>;
  }
  return (
    <>
      {receipe ? (
        <Wrapper>
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
          <BODY>
            <Image>
              <img src={receipe?.images?.SMALL?.url} />
            </Image>
            <DIV>
              <h2>Ingredients</h2>
              <SUBDIV>
                <SUBSUBDIV>
                  {receipe.ingredients.map((element) => {
                    return <div>{element.text}</div>;
                  })}
                </SUBSUBDIV>
              </SUBDIV>
            </DIV>
            <DIV>
              <h2>Details</h2>
              <SUBDIV>
                <h3>Calories:</h3>
                <SUBSUBDIV>{receipe.calories}</SUBSUBDIV>
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
              <h2>Total Nutrients</h2>
              <SUBDIV>
                <h3>CA:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.CA.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CA.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CA.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>CHOCDF:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.CHOCDF.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CHOCDF.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CHOCDF.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>CHOLE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.CHOLE.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CHOLE.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.CHOLE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>ENERC_KCAL:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.ENERC_KCAL.label}</SUBSUBDIV>
                <SUBSUBDIV>
                  {receipe.totalNutrients.ENERC_KCAL.quantity}
                </SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.ENERC_KCAL.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FAMS:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FAMS.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAMS.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAMS.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FAPU:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FAPU.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAPU.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAPU.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FASAT:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FASAT.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FASAT.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FASAT.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FAT:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FAT.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAT.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FAT.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FATRN:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FATRN.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FATRN.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FATRN.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FE.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FE.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FIBTG:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FIBTG.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FIBTG.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FIBTG.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FOLAC:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FOLAC.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLAC.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLAC.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FOLDFE:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FOLDFE.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLDFE.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLDFE.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>FOLFD:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.FOLFD.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLFD.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.FOLFD.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>K:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.K.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.K.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.K.unit}</SUBSUBDIV>
              </SUBDIV>
              <SUBDIV>
                <h3>MG:</h3>
                <SUBSUBDIV>{receipe.totalNutrients.MG.label}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.MG.quantity}</SUBSUBDIV>
                <SUBSUBDIV>{receipe.totalNutrients.MG.unit}</SUBSUBDIV>
              </SUBDIV>
              [ "NA", "NIA", "P", "PROCNT", "RIBF", "SUGAR", "SUGAR.added",
              "Sugar.alcohol", "THIA", "TOCPHA", "VITA_RAE", "VITB6A", "VITB12",
              "VITC", "VITD", "VITK1", "WATER", "ZN",
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
  padding-top: 20px;
`;
const SUBDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  background-color: whitesmoke;
  margin: 15px;
  padding: 10px;
`;
const HEADER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const BODY = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

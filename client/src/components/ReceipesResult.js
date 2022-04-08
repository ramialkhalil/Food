import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const ReceipesResult = () => {
  const [search, setSearch] = useState(null);
  useEffect(() => {
    setSearch(JSON.parse(sessionStorage.getItem("receipes")));
    console.log(JSON.parse(sessionStorage.getItem("receipes")));
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};
export default ReceipesResult;

import { createContext } from "react";

export const FoodContext = createContext(null);

const FoodProvider = ({ children }) => {
  return <FoodContext.Provider value={{}}>{children}</FoodContext.Provider>;
};
export default FoodProvider;

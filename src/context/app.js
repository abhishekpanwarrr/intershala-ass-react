import { createContext, useState } from "react";
import { userData } from "../assets/userData";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(userData);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

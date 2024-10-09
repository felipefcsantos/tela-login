import React, { createContext, useState } from "react";
import Login from "../pages/Login";
const ContextNavigate = createContext();

const NavigateProvider = ({ children }) => {
  const [page, setPage] = useState(<Login/>);

  return (
        <ContextNavigate.Provider value={{ page, setPage}}>
            {children}
        </ContextNavigate.Provider>
  );
}

export { ContextNavigate, NavigateProvider };
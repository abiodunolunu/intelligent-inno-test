import { createContext, useContext, useState } from "react";

const globalContext = createContext(null);

export const useGlobalContext = () => {
  return useContext(globalContext);
};

const GlobalContextProvider = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const closeSideBar = () => {
    if (!showSideBar) return;
    setShowSideBar(false);
  };

  return <globalContext.Provider value={{ showSideBar, toggleSideBar, closeSideBar }}>{props.children}</globalContext.Provider>;
};

export default GlobalContextProvider;

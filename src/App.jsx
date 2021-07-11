import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import GlobalContextProvider from "./context/GlobalContext";
import ImageContextProvider from "./context/ImageContext";

const App = () => {
  return (
    <GlobalContextProvider>
      <ImageContextProvider>
        <Dashboard />
      </ImageContextProvider>
    </GlobalContextProvider>
  );
};

export default App;

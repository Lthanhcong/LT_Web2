import { BrowserRouter } from "react-router-dom";
import routers from "./core/routerConfig";
import renderRouters from "./routers";
import React, { useState } from "react";

export let AContext = React.createContext();

function App() {
  let [login, setLogin] = useState(true);
  function handleLogin() {
    setLogin(true);
  }

  return (
    <AContext.Provider value={{ login, handleLogin }}>
      <BrowserRouter>{renderRouters(routers)}</BrowserRouter>
    </AContext.Provider>
  );
}

export default App;

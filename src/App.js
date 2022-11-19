import React from "react";
import "./assets/css/styles";
import Routes from "./routes";
import useController, { AppContext } from "./AppContext";

function App() {
  const { Provider } = AppContext;
  const { state, dispatch } = useController();

  return (
    <Provider value={{ ...state, dispatch }}>
      <Routes />
    </Provider>
  );
}

export default App;

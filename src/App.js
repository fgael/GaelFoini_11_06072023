import React, { useEffect } from "react";
import AppRouter from "./router/index.js";

const App = () => {
  useEffect(() => {
    document.title = "Kasa";
  }, []);
  return <AppRouter />;
};

export default App;

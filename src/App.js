import React from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    <footer style={{ textAlign: "center" }}>&copy; Ian Kimble 2020</footer>
  </div>
);

export default App;

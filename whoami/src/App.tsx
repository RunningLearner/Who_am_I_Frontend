import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import Header from "./components/utils/Header";
import Navbar from "./components/utils/Navbar";

const Main = loadable(() => import("./components/Main/index"));
const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};
export default App;

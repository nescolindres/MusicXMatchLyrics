import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element ={<Index/>} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;

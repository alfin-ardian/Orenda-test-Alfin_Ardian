import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Customer from "./pages/customer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/"> */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Customer />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

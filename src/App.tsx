import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Donate from "./Donate";
import Mission from "./Mission";
import Landing from "./Landing";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Trajectory />
    </BrowserRouter>
  );
}

const Trajectory = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
  );
};
export default App;

import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact  from "./Contact";
import Donate from "./Donate";
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Trajectory />
    </BrowserRouter>
  )
}

const Trajectory  = () => {

  return (
    <Routes>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/donate" element={<Donate />}/>
    </Routes>
  )
}
export default App

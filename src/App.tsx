import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Stripe from "./Stripe";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
<Route path="/stripe" element={<Stripe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

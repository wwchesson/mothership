import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LandingBig from "./LandingBig";
import LandingSmall from "./LandingSmall";
import Stripe from "./Stripe";
import "./App.css";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 424px)" });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isMobile ? <LandingSmall /> : <LandingBig />} />
        <Route path="/stripe" element={<Stripe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

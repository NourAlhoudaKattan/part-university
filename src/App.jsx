import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Software from "./pages/Software";
import Network from "./pages/Network";
import Ai from "./pages/Ai";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Software" element={<Software/>}/>
        <Route path="/Network" element={<Network/>}/>
        <Route path="/Ai" element={<Ai/>}/>
      </Routes>
    </>
  );
}

export default App;

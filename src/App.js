import { Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;

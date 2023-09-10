import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import GamePage from "./pages/game/GamePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

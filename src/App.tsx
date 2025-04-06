import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Veille from "./pages/Veille";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/veille" element={<Veille />} />
      </Routes>
    </Router>
  );
}

export default App;

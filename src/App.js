import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div>
    <Router>
       {/* Navbar is here because we want to show it on every page */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

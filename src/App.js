import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";


function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          {/* Navbar is here because we still want to show it even if page changes */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;

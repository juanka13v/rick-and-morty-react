import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SearchPage from "./pages/SearchPage/SearchPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

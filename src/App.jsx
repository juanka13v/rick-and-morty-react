import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  NotFound,
  SearchPage,
  LocationsPage,
  EpisodesPage,
  SingleCharacterPage,
} from "@pages";

import { Header, Footer } from "@components";

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
            <Route path="/character/:id" element={<SingleCharacterPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

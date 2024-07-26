import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [loading, setIsLoading] = useState(true);

  //Dyanamic naming tabs
  useEffect(() => {
    document.title = `Gerardo - ${currentPage}`;
  }, [currentPage]);

  //handles naming state based on routing
  const handlePageName = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  return (
    <>
      <Router>
        {!loading && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handlePageName={handlePageName}
                handleLoading={handleLoading}
                loading={loading}
              />
            }
          />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

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
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

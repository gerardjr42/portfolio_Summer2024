import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Loading from "../components/Loading";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home({ handlePageName, handleLoading, loading }) {
  const location = useLocation();

  useEffect(() => {
    handlePageName("Homepage");
    setTimeout(() => {
      handleLoading(false);
    }, 4500);
  }, []);

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    if (path) {
      scroller.scrollTo(path, {
        smooth: true,
        duration: 500,
        offset: 0, // Adjust for navbar height if necessary
      });
    }
  }, [location]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Element id="about" name="about">
            <div className="flex h-screen items-center justify-center bg-blue-200">
              <About />
            </div>
          </Element>
          <Element id="projects" name="projects">
            <div className="flex h-screen items-center justify-center bg-green-200">
              <Projects />
            </div>
          </Element>
          <Element id="blog" name="blog">
            <div className="flex h-screen items-center justify-center bg-green-200">
              <Blog />
            </div>
          </Element>
          <Element id="contact" name="contact">
            <div className="flex h-screen items-center justify-center bg-red-200">
              <Contact />
            </div>
          </Element>
        </div>
      )}
    </>
  );
}
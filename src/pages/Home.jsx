import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Loading from "../components/Loading";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Vision from "./Vision";

export default function Home({ handlePageName, handleLoading, loading }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    handlePageName(path);
    setTimeout(() => {
      handleLoading(false);
    }, 4500);
  }, [handleLoading, handlePageName]);

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
            <div className="flex h-screen items-center justify-center">
              <About />
            </div>
          </Element>
          <Element id="vision" name="vision">
            <div className="flex h-full items-center justify-center">
              <Vision />
            </div>
          </Element>
          <Element id="projects" name="projects">
            <div className="flex h-screen items-center justify-center">
              <Projects />
            </div>
          </Element>
          <Element id="contact" name="contact">
            <div className="flex h-screen items-center justify-center bg-[#4E4C4C]">
              <Contact />
            </div>
          </Element>
        </div>
      )}
    </>
  );
}

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust for navbar height if necessary
      });
    }
  }, [location]);
  return (
    <div>
      <Element id="about" name="about">
        <div className="flex h-screen items-center justify-center bg-blue-200">
          <h1 className="text-5xl">About Me</h1>
        </div>
      </Element>
      <Element id="projects" name="projects">
        <div className="flex h-screen items-center justify-center bg-green-200">
          <h1 className="text-5xl">Projects</h1>
        </div>
      </Element>
      <Element id="contact" name="contact">
        <div className="flex h-screen items-center justify-center bg-red-200">
          <h1 className="text-5xl">Contact Me</h1>
        </div>
      </Element>
    </div>
  );
}

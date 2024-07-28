import { useEffect, useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <div
      className={`relative h-screen w-full transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="https://videos.pexels.com/video-files/2324293/2324293-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="prose mx-auto mb-36 pt-24 text-center text-white">
          <h1 className="prose font-serif text-5xl font-semibold leading-none text-white">
            Gerardo Garcia Jr.
          </h1>
          <h2 className="prose font-mono text-xl font-normal leading-none text-white">
            Full-Stack Engineer
          </h2>
          <div className="flex flex-col">
            <h2 className="prose font-mono text-base font-thin text-white">
              I am a full-stack web developer with a passion for AI and ML. My
              goal is to merge these technologies to create meaningful solutions
              that{" "}
              <span className="prose font-mono font-semibold italic text-red-400">
                {" "}
                enhance
              </span>{" "}
              the lives of individuals. With a background in biology and
              nursing, I bring a unique{" "}
              <span className="prose font-mono font-semibold italic text-red-400">
                {" "}
                perspective
              </span>{" "}
              to software development, focusing on user-centric design and
              innovation. Join me on a journey to harness the power of AI and ML
              to make a positive impact on the world.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="w-full">
      <video
        className="h-full w-full object-contain"
        src="https://videos.pexels.com/video-files/2324293/2324293-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 flex h-full w-3/6 flex-col justify-center align-middle">
        <div className="prose mx-auto mb-36 pt-24">
          <h1 className="mb-2 text-center font-serif text-6xl">About Me</h1>
          <h4>
            Hello, my name is Gerardo Garcia. I'm a versatile full-stack
            developer with a unique blend of expertise in biology, nursing, and
            technology. Coming from a second-generation immigrant family, I've
            developed two key traits that have been instrumental to my success
            as a software engineer:
            <span className="font-semibold italic text-red-400">
              {" "}
              perseverance
            </span>{" "}
            and{" "}
            <span className="font-semibold italic text-red-400">
              resiliency
            </span>
          </h4>
        </div>
        <div className="prose mx-auto mb-36 mt-6">
          <h4 className="">
            These qualities have made me an exceptional organizer and
            problem-solver. I excel at agile project management, fostering
            collaborative environments that emphasize teamwork and knowledge
            sharing. My nursing background allows me to bring a human-centered
            perspective to the team, ensuring that our solutions are not only
            innovative but also deeply empathetic and user-focused.
          </h4>
          <h4>
            As a team player and leader, I go beyond traditional roles by
            actively promoting a culture of mentorship. I believe that by
            sharing knowledge and supporting one another, we can drive more
            meaningful impact through our work. This approach has led to the
            development of highly accessible and impactful software solutions.
          </h4>
        </div>
      </div>
    </div>
  );
}

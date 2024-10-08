import React from "react";

function Contact() {
  return (
    <>
      <div className="mr-auto hidden min-h-screen flex-col items-center justify-start pl-12 lg:flex">
        <div className="sm:mt-24">
          <h1 className="prose font-serif text-5xl font-thin uppercase leading-none sm:text-[5rem]">
            Gerardo
          </h1>
          <h1 className="prose font-serif text-5xl font-thin uppercase leading-none sm:text-[5rem]">
            Garcia Jr.
          </h1>
        </div>
      </div>
      {/* Testing Area */}
      <div className="mx-10 sm:mx-auto sm:flex sm:min-h-full sm:w-[60%] sm:flex-col sm:items-end sm:justify-start lg:pr-[8rem]">
        <div className="mt-24 sm:mt-0">
          <h2 className="prose font-serif text-3xl font-thin uppercase leading-none">
            What am I doing when I'm not coding?
          </h2>
          <hr className="mt-6 border-t-2 border-red-400" />
          <h2 className="prose mt-6 font-serif text-xl font-semibold uppercase">
            Family
          </h2>
          <p className="prose mt-2 font-serif text-base font-normal">
            When I'm not immersed in coding, you'll find me cherishing moments
            with my beloved furry companions, Solin, my 13-year-old Bichon
            Frise, and Sana, my energetic 4-month-old Australian Shepherd pup.
            They fill my days with boundless joy and heartwarming companionship.
            We love exploring the beauty of Prospect Park on our walks and
            occasionally venture on exciting hikes together, creating
            unforgettable memories along the way.
          </p>
          <h2 className="prose mt-6 font-serif text-xl font-semibold uppercase">
            Running
          </h2>
          <p className="prose mt-2 font-serif text-base font-normal">
            I took up running when the pandemic hit. Initially, I didn't find it
            enjoyable, but it became my sole outdoor activity for finding peace.
            Over time, I developed a deep passion for it. There's a special kind
            of magic in a long-distance run: I leave behind my daily concerns
            and become one with my body, feeling as free as a child.
          </p>
          <h2 className="prose mt-6 font-serif text-xl font-semibold uppercase">
            Reading
          </h2>
          <p className="prose mt-2 font-serif text-base font-normal">
            Reading has always been a cherished pastime of mine, offering a
            gateway to profound knowledge and intellectual exploration. My
            reading preferences lean towards the captivating realms of
            psychology and philosophy, where I find solace and enlightenment.
            Presently, my focus is dedicated to the absorbing world of Carl
            Jung's Black books, where I am captivated by the intricate layers of
            his thoughts and the profound wisdom they hold.
          </p>
        </div>
        <div className="mb-6 mt-10 flex flex-row items-end justify-end align-bottom">
          <a href="http://www.linkedin.com/in/garciajrgerardo" target="_blank">
            <img
              src="/assets/images/linkedin.png"
              alt="linked in"
              className="mr-4 h-10 w-10 opacity-40 hover:opacity-100"
            />
          </a>
          <a href="https://github.com/gerardjr42" target="_blank">
            <img
              src="/assets/images/github.png"
              alt="github"
              className="h-10 w-10 opacity-50 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;

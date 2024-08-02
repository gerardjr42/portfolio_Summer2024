import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="fixed z-50 w-full bg-black bg-opacity-60 text-white">
      <ul className="mx-auto my-2 flex w-full items-center justify-center space-x-2 text-center align-middle sm:space-x-4">
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link to="/about">About</Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link to="/vision">Vision</Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link to="/projects">Projects</Link>
        </li>
        <span>/</span>
        <li className="text-white text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-90 hover:underline hover:underline-offset-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

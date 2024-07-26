import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="fixed z-50 w-full">
      <ul className="mx-auto mt-8 flex justify-center space-x-4">
        <li className="text-black text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-50 hover:underline hover:underline-offset-4">
          <Link to="/about">About</Link>
        </li>
        <span>/</span>
        <li className="text-black text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-50 hover:underline hover:underline-offset-4">
          <Link to="/projects">Projects</Link>
        </li>
        <span>/</span>
        <li className="text-black text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-50 hover:underline hover:underline-offset-4">
          <Link to="/blog">Blog</Link>
        </li>
        <span>/</span>
        <li className="text-black text-opacity-100 transition duration-300 ease-in-out hover:text-red-400 hover:text-opacity-50 hover:underline hover:underline-offset-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

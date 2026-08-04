import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#0B7D77] shadow-md z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-10">

        {/* Logo */}
        <h1 className="text-white text-4xl font-bold">
          Areeba Khalid
        </h1>

        {/* Navigation Menu */}
        <ul className="flex items-center gap-10 text-white text-lg font-semibold">

          <li>
            <a
              href="#home"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              About
            </a>
          </li>


          <li>
            <a
              href="#skills"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              Contact
            </a>
          </li>

          {/* Login */}
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-300 duration-300 cursor-pointer"
            >
              Login
            </Link>
          </li>

          {/* Signup */}
          <li>
            <Link
              to="/signup"
              className="bg-white text-[#0B7D77] px-5 py-2 rounded-full hover:bg-gray-100 duration-300"
            >
              Sign Up
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
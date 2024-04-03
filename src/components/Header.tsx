import { Link } from "react-router-dom";

import logoherb from "../assets/logoherb.png";

export const Header = () => {
  return (
    <header className="bg-gray-800 border-gray-700 flex flex-col lg:flex-row justify-around items-center">
      <section>
        <div className="mx-auto p-4">
          <Link to="/" className="flex items-center space-x-6">
            <img src={logoherb} className="h-12" alt="Coatofarms Design logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Coatofarms Design
            </span>
          </Link>
        </div>
      </section>
      <section>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white text-sm md:text-xl text-center cursor-pointer mb-3">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="#">Portfolio</Link>
            </li>
            <li>
              <Link to="#">Order/Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

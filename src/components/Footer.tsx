import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex-row md:flex md:items-center md:justify-between space-y-2">
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
          <li>
            <SocialIcon
              url="https://www.facebook.com/RegalCoatOfArms"
              network="facebook"
              className="hover:underline me-4 md:me-6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.instagram.com/regalcoatofarms/"
              network="instagram"
              className="hover:underline me-4 md:me-6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://pl.pinterest.com/RegalCoatOfArms/coat-of-arms-designed-by-me/"
              network="pinterest"
              className="hover:underline me-4 md:me-6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://twitter.com/i/flow/login?redirect_after_login=%2FRegalCoatOfArms%2F"
              network="x"
              className="hover:underline me-4 md:me-6"
            />
          </li>
        </ul>
        <span className="text-sm sm:text-center text-gray-400 text-center">
          © 2024{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            Coatofarms Design™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

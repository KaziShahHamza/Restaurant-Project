import { useState } from "react";
import logo from "../assets/logo.png";
import navbar from "../assets/navbar.jpg";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };
  return (
    <nav
      className="bg-gray-300/10 top-2 z-50 flex w-full flex-col items-center justify-center"
      style={{ backgroundImage: `url(${navbar})` }}
    >
      <div
        className="flex w-full items-center justify-between overflow-y-hidden p-3 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg "
      >
        <Link to="/">
          <img src={logo} alt="logo" height={22} width={80} />
        </Link>
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              to={`${link.targetId}`}
              // onClick={(e) => handleScroll(e, link.targetId)}
              className={`text-base hover:opacity-50 ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="lg:hidden ">
          <button onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              to={`${link.targetId}`}
              // onClick={(e) => handleScroll(e, link.targetId)}
              className="block p-4 uppercase tracking-tighter text-base"
            >
              {link.text}
            </Link> 
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

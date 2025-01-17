import { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

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
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="logo" height={22} width={80} />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className={`text-sm hover:opacity-50 ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden ">
          <button onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="block p-4 uppercase tracking-tighter"
            >
              {link.text}
            </a> 
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

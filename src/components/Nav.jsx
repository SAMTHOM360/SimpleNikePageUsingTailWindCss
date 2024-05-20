import { headerLogo } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleToggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  const handleHamburgerMenuItemClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <>
      <header className="lg:padding-x py-8 max-lg:py-0 absolute max-lg:fixed z-[1000] w-full">
        <nav className="flex justify-between items-center max-container max-lg:hidden">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks?.map((item) => (
              <li key={item?.label}>
                <a
                  href={item?.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item?.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="hidden max-lg:py-5 max-lg:flex justify-between items-center max-container bg-white">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <div className="hidden max-lg:block cursor-pointer relative">
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => handleToggleHamburgerMenu()}
              className={`absolute transition-all duration-300 ${
                isHamburgerMenuOpen
                  ? "-rotate-180 opacity-0 none"
                  : "rotate-180 opacity-100"
              }`}
            />
            <img
              src={cross}
              alt="Cross"
              width={25}
              height={25}
              onClick={() => handleToggleHamburgerMenu()}
              className={`transition-all duration-300 ${
                isHamburgerMenuOpen
                  ? "-rotate-180 opacity-100"
                  : "rotate-180 opacity-0 none"
              }`}
            />
          </div>
        </nav>
      </header>
      <div
        className={`hidden z-[500] max-lg:block fixed bg-white left-0 w-full shadow-md transition-transform transform ${
          isHamburgerMenuOpen ? "translate-y-[65px]" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 py-8">
          {navLinks?.map((item) => (
            <li key={item?.label}>
              <a
                href={item?.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={() => handleHamburgerMenuItemClick()}
              >
                {item?.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;

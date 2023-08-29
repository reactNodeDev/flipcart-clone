import React, { useState } from "react";
import FlipkartSvg from "../assets/flipkart.svg";
import { DropdownMenu, NavbarItem, SearchBar } from "../components";
import { SiGooglemybusiness } from "react-icons/si";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { navbarDropdownItems, navbarDropdownOptionsItems } from "../utils";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleOptionsDropdown, setToggleOptionsDropdown] =
    useState<boolean>(false);
  const name = (e:React.MouseEvent) => e.currentTarget.getAttribute("data-name");


  const handleOnMouseOver = (e:React.MouseEvent) => {
    if (name(e) === "userProfileButton") setToggleDropdown(true);
    if (name(e) === "optionsMenuButton") setToggleOptionsDropdown(true);
  };

  const handleOnMouseOut = (e:React.MouseEvent) => {
    if (name(e) === "userProfileButton") setToggleDropdown(false);
    if (name(e) === "optionsMenuButton") setToggleOptionsDropdown(false);
  };

  return (
    <nav
      className={`min-h-[4rem] w-[100vw] lg:h-[4rem] pb-4 lg:pb-0 bg-white flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 `}
    >
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:w-[60%] w-full  lg:space-x-3 h-full lg:items-center lg:justify-between lg:px-4">
        <span className="lg:mr-3">
          <img
            src={FlipkartSvg}
            height={100}
            width={100}
            className={`ml-2 mt-2 lg:ml-0`}
          />
        </span>
        <SearchBar />
      </div>
      <div className="flex w-[100vw] lg:w-[40%] justify-around items-center">
        <NavbarItem Icon={SiGooglemybusiness} text="Become a Seller" />

        {/* user profile dropdown menu */}
        <section
          className="relative p-2"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          data-name={"userProfileButton"}
        >
          <NavbarItem
            Icon={GoPerson}
            text="User"
            ExtraIcon={toggleDropdown ? MdOutlineKeyboardArrowDown : MdOutlineKeyboardArrowUp}
          />
          {toggleDropdown ? (
            <DropdownMenu
              menuItems={navbarDropdownItems}
              // onMouseOut={handleOnMouseOut}
              className="userProfile absolute bg-white w-[12rem] left-0 z-[800]"
              data-name={"userProfileMenu"}
            />
          ) : null}
        </section>
        {/*  */}

        <NavbarItem Icon={AiOutlineShoppingCart} text="Cart" />

        {/* menu options dropdown */}
        <section
          id="menuButton"
          className="optionsMenu relative p-2 justify-end"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          data-name={"optionsMenuButton"}
        >
          <NavbarItem Icon={CiMenuKebab} text="" />
          {toggleOptionsDropdown ? (
            <DropdownMenu
              menuItems={navbarDropdownOptionsItems}
              className="absolute bg-white w-[15rem] right-[1rem] z-[800]"
              data-name={"optionsMenu"}
            />
          ) : null}
        </section>
        {/*  */}
      </div>
    </nav>
  );
};

export default Navbar;

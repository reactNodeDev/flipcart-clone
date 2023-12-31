import React, { useState } from "react";
import FlipkartSvg from "../../assets/flipkart.svg";
import { AnimatedSymbol, DropdownMenu, Modal, NavbarItem, SearchBar } from "../../components";
import { SiGooglemybusiness } from "react-icons/si";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { navbarDropdownItems, navbarDropdownOptionsItems } from "../../utils";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showDialog = searchParams.get("showDialog");
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  // const [showModal, setshowModal] = useState<boolean>(false);
  const [toggleOptionsDropdown, setToggleOptionsDropdown] =
    useState<boolean>(false);
  const name = (e: React.MouseEvent) =>
    e.currentTarget.getAttribute("data-name");

  const handleOnMouseOver = (e: React.MouseEvent) => {
    if (name(e) === "userProfileButton") setToggleDropdown(true);
    if (name(e) === "optionsMenuButton") setToggleOptionsDropdown(true);
  };

  const handleOnMouseOut = (e: React.MouseEvent) => {
    if (name(e) === "userProfileButton") setToggleDropdown(false);
    if (name(e) === "optionsMenuButton") setToggleOptionsDropdown(false);
  };
  return (
    <>
      <nav
        className={`min-h-[4rem] max-w-[100vw] lg:h-[4rem] pb-1 lg:pb-0 bg-white flex flex-col lg:flex-row lg:items-center lg:space-y-0`}
      >
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:w-[60%] w-full  lg:space-x-3 h-full lg:items-center lg:justify-between lg:px-4">
          <Link to={"/"} className="lg:mr-3">
            <img
              src={FlipkartSvg}
              height={100}
              width={100}
              className={`ml-2 mt-2 lg:ml-0`}
            />
          </Link>
          <SearchBar />
        </div>
        <div className="flex w-[100vw] lg:w-[40%] justify-around items-center">
          <NavbarItem
            Icon={SiGooglemybusiness}
            text="Become a Seller"
            onClick={() => {
              setSearchParams({ showDialog: "true" });
            }}
          />

          {/* user profile dropdown menu */}
          <section
            id="profileButton"
            className="relative p-2 h-auto"
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
            data-name={"userProfileButton"}
          >
            <NavbarItem
              Icon={GoPerson}
              text="User"
              ExtraIconHTML={
                <AnimatedSymbol animate={{rotate:toggleDropdown ? 180 : 0}} symbol={ <IoIosArrowDown />} />
              }
            />
            {toggleDropdown ? (
              <DropdownMenu
                menuItems={navbarDropdownItems}
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
            className="h-auto optionsMenu relative p-2 justify-end"
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
        <AnimatePresence>
          {typeof showDialog === "string" ? (
            <Modal
              key={"popUpModalDialog123456783736362893929"}
              onClose={() => {}}
              show={typeof showDialog === 'string'}
            >
              <p>Hello {typeof showDialog}</p>
            </Modal>
          ):null}
        </AnimatePresence>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

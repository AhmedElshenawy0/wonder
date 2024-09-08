"use client";
import Link from "next/link";
import "./style.css";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import SubButton from "./SubButton";
import HelpDropDown from "./HelpDropDown";
import { useState } from "react";
import CategoryDropDown from "./CategoryDropDown";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import useOnclickOutside from "react-cool-onclickoutside";

const Nav = () => {
  const [openHelpMenu, setOpenHelpMenu] = useState(false);
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const ref = useOnclickOutside(() => {
    setOpenNav(false);
  });

  const handleOpenHelps = () => {
    setOpenHelpMenu(true);
    setOpenCategoryMenu(false);
  };
  const handleOpenCategory = () => {
    setOpenCategoryMenu(true);
    setOpenHelpMenu(false);
  };

  const handleCloseOpens = () => {
    setOpenHelpMenu(false);
    setOpenCategoryMenu(false);
  };

  return (
    <div className="header fixed top-0 z-40 w-full ">
      <SubButton />
      <div className="main-nav flex flex-col bg-white">
        <div className="top-nav-holder  border-b border-black">
          <div className="top-nav h-[3.5rem] mx-3 lg:mx-16  relative justify-between">
            <div className="flex gap-3 justify-end absolute top-[50%] translate-y-[-50%] right-0">
              <IoSearchOutline />
              <FiUser />
              <FiShoppingCart />
            </div>
            <h2
              className={` text-[20px] logo font-semibold absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%]`}
            >
              WONDER
            </h2>
            {openNav ? (
              <IoClose
                className="lg:hidden absolute top-[50%] translate-y-[-50%] left-0"
                onClick={() => setOpenNav(false)}
              />
            ) : (
              <MdMenu
                className="lg:hidden absolute top-[50%] translate-y-[-50%] left-0 text-[20px]"
                onClick={() => setOpenNav(true)}
              />
            )}
            <div
              ref={ref}
              style={{
                clipPath: openNav
                  ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
                  : "",
              }}
              className="links-holder transition-all duration-500 z-20"
            >
              <ul className="flex lg:items-center lg:gap-3 links  lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:left-0">
                <li className="hidden lg:block" onClick={handleCloseOpens}>
                  <Link href="/">أحدث المنتجات</Link>
                </li>
                <li className={`active`} onClick={handleOpenCategory}>
                  <Link href="/">الأقسام</Link>
                </li>
                <li className="hidden lg:block" onClick={handleCloseOpens}>
                  <Link href="/" className="">
                    المدونة
                  </Link>
                </li>
                <li className={`active`} onClick={handleOpenHelps}>
                  <Link href="/">مساعدة</Link>
                </li>
              </ul>
              <div className="mt-4 lg:hidden flex flex-col justify-start">
                <HelpDropDown openHelp={openHelpMenu} />
                <CategoryDropDown openCategory={openCategoryMenu} />
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block ">
          <HelpDropDown openHelp={openHelpMenu} />
          <CategoryDropDown openCategory={openCategoryMenu} />
        </div>
      </div>
    </div>
  );
};
//
export default Nav;

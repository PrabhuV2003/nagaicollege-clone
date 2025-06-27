import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <div className=" w-full h-[100px] bg-white shadow flex justify-between items-center px-4 relative ">
      <div className=" max-lg:hidden ">
        <button className="cursor-pointer bg-gradient-to-b from-primary to-sec shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group max-lg:text-sm">
          <div class="relative overflow-hidden">
            <p class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Admission Open
            </p>
            <p class="absolute top-7 text-center left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Now Get It &#43;
            </p>
          </div>
        </button>
      </div>
      <div className=" -ml-24 max-lg:-ml-0 ">
        <NavLink to="/">
          <img
            className=" w-[90px] h-[90px] "
            src="https://nagaicollege.com/assets/img/logo/logo.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className=" text-2xl groud " onClick={() => setNavOpen(!NavOpen)}>
        <div className=" w-[50px] h-[50px] flex justify-center items-center rounded-full shadow-2xl cursor-pointer hover:bg-primary hover:text-white transition-all duration-700 ">
          <GiHamburgerMenu />
        </div>
      </div>

      <div
        className={`h-[100px] bg-[#ffa704] absolute left-0 top-full z-50 flex justify-center items-center gap-20 text-primary font-bold transition-all duration-700 ${
          NavOpen
            ? "w-full scale-100 opacity-100 max-lg:w-[50%] "
            : "w-0 xl:scale-0 opacity-0 select-none "
        } max-xl:gap-10 max-xl:h-[600px] max-xl:flex-col max-lg:items-end max-lg:pr-5 `}
      >
        <NavLink to="/" onClick={() => setNavOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/about-us" onClick={() => setNavOpen(false)}>
          ABOUT US
        </NavLink>
        <NavLink to="/acadmeics" onClick={() => setNavOpen(false)}>
          ACADEMICS
        </NavLink>
        <NavLink to="/facilites" onClick={() => setNavOpen(false)}>
          FACILITES
        </NavLink>
        <NavLink to="/student corner" onClick={() => setNavOpen(false)}>
          STUDENT CORNER
        </NavLink>
        <NavLink to="/placement" onClick={() => setNavOpen(false)}>
          PLACEMENT
        </NavLink>
        <NavLink to="/contact-us" onClick={() => setNavOpen(false)}>
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

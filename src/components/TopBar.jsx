import React from 'react'
import { LuMailPlus } from "react-icons/lu";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const TopBar = () => {
  return (
    <div className=' w-full h-[50px] text-white flex justify-between items-center bg-primary max-md:flex-col max-md:h-[60px] '>
        <div className=' flex items-center gap-10 ml-5 max-lg:text-sm '>
            <a href="tel:916381491591" className=' flex items-center gap-2 hover:font-bold transition-all duration-400 '>
                <MdOutlinePhonelinkRing />
                <p>+91-6381491591</p>
            </a>
            <a href="mailto:principal@nagaicollege.com" className=' flex items-center gap-2 hover:font-bold transition-all duration-400 '>
                <LuMailPlus />
                <p>principal@nagaicollege.com</p>
            </a>
        </div>
        <div className=' w-[30%] max-xl:w-[40%] max-md:w-full h-full bg-sec cross flex justify-end items-center overflow-hidden '>
            <div className=' w-[80%] h-full flex justify-center items-center textMoving max-lg:text-sm '>
                <p>Admission Open For 2025 - 2026</p>
            </div>
        </div>
    </div>
  )
}

export default TopBar
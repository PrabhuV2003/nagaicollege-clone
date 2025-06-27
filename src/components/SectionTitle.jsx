import React from "react";

const SectionTitle = ({ text1, text2 }) => {
  return (
    <div>
      <div className=" w-full text-center flex flex-col  ">
        <button class="group/button w-fit m-auto mb-2 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary backdrop-blur-lg px-6 py-2 text-base font-semibold text-[#ffa704] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
          <span class="text-lg">{text1}</span>
          <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div class="relative h-full w-10 bg-white/20"></div>
          </div>
        </button>

        <h1 className=" text-4xl max-md:text-2xl uppercase mb-5 text-primary font-bold ">
          {text2}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;

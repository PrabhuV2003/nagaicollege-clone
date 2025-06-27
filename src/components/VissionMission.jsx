import { title } from "framer-motion/client";
import React from "react";

const VissionMission = () => {
  const content = [
    {
      title: "Vision",
      desc: "To be a leading institution in teacher education, committed to excellence in teaching, learning, and service, by the preparing dedicated, reflective, and socially responsible educators who inspire lifelong learning and contribute meaningfully to a just and inclusive society.",
    },
    {
      title: "Mission",
      desc: "To provide high-quality, institutions value-based teacher education on our that fosters intellectual growth, pedagogical expertise, and ethical responsibility. To be a empower prespective teachers with the unique and innovative teaching methodologies, digital literacy, and research skills.",
    },
  ];

  return (
    <div className="  w-full h-[300px] bg-primary relative mb-[200px] max-md:h-full max-md:py-4 max-md:mb-4 ">
      <div className=" w-[80%] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2  grid grid-cols-2 gap-5 max-xl:w-[90%] max-lg:w-[95%] max-md:grid-cols-1 max-md:h-fit max-md:static max-md:-translate-x-0 m-auto ">
        {content.map((content, index) => (
          <div
            key={index}
            class="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-primary to-sec text-gray-50"
          >
            <div class="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-full h-full flex flex-col justify-between items-center relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
              <div class="text w-full p-3 flex flex-col justify-evenly h-full">
                <span class="font-bold text-3xl">{content.title}</span>
                <p class="subtitle text-xl max-lg:text-[16px] mr-2.5 leading-8 ">
                  {content.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VissionMission;

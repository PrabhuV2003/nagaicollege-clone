import React from "react";
import DecayCard from "./DecayCard";
import SectionTitle from "./SectionTitle";

const Welcome = () => {
  return (
    <div className=" overflow-hidden ">
      <div className=" w-[90%] mx-auto my-[50px] flex justify-between max-xl:w-[95%] max-lg:flex-col ">
        <div className=" flex justify-center items-center ">
          <DecayCard
            width={500}
            height={500}
            image="https://nagaicollege.com/assets/img/about/02.jpg"
          >
            <h2 className=" text-white ">
              Nagai
              <br />
              College
            </h2>
          </DecayCard>
        </div>
        <div className=" w-full ">
          <SectionTitle
            text1={"WELCOME TO"}
            text2={"Nagai College of Education"}
          />

          <p className=" text-xl leading-9 mb-5 text-justify ">
            Established in 2006, Nagai College of Education is a premier
            institution committed to excellence in teacher education. Located in
            Pappakovil, Nagapattinam district of Tamil Nadu, the college
            provides a conducive learning environment aimed at nurturing future
            educators with strong academic foundations and ethical values.
          </p>

          <p className=" text-xl leading-9 mb-5 text-justify ">
            The institution is affiliated with Tamil Nadu Teachers Education
            University (TNTEU), Chennai, and is recognized by the National
            Council for Teacher Education (NCTE), ensuring compliance with
            national standards in teacher training. With a focus on quality
            education, pedagogical innovation, and professional development,
            Nagai College of Education equips its students with the skills and
            knowledge necessary to meet the dynamic demands of the teaching
            profession.
          </p>

          <button class="cursor-pointer relative bg-[#ffa704] py-3 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-primary transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
            <div class="absolute flex px-1 py-0.5 justify-start items-center inset-0">
              <div class="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
              <div class="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-primary transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-[#ffa704]">
                <div class="size-[0.8rem] text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    height="100%"
                    width="100%"
                  >
                    <path
                      fill="currentColor"
                      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black">
              Discover More
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

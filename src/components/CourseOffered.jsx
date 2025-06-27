import React from "react";
import SectionTitle from "./SectionTitle";
import Slider from "react-slick";

const CourseOffered = () => {
  const Courses = [
    {
      CourseName: "B.Ed Economics",
      desc: "Train teachers for Economics and related social science subjects",
      img: "https://nagaicollege.com/assets/img/visa/06.jpg",
    },
    {
      CourseName: "B.Ed Commerce",
      desc: "Equip students to teach Commerce, Business Studies, and Accountancy.",
      img: "https://nagaicollege.com/assets/img/visa/02.jpg",
    },
    {
      CourseName: "B.Ed History",
      desc: "Train teachers for History and related humanities subjects.",
      img: "https://nagaicollege.com/assets/img/visa/04.jpg",
    },
    {
      CourseName: "B.Ed English",
      desc: "Prepare future educators to teach English language and literature.",
      img: "https://nagaicollege.com/assets/img/visa/01.jpg",
    },
    {
      CourseName: "B.Ed Mathematics",
      desc: "Specialize in teaching mathematics to high school students.",
      img: "https://nagaicollege.com/assets/img/visa/03.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };

  return (
    <div >
      <SectionTitle
        text1={"Courses Offered"}
        text2={`Let's explore our Courses`}
      />
      <div className="w-[90%] m-auto max-xl:w-[95%] ">
        <Slider {...settings}>
  {Courses.map((course, index) => (
    <div key={index} className="p-5 max-xl:p-3">
      <div className="relative flex flex-col justify-between min-h-[500px] rounded-xl bg-white text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <img
            src={course.img}
            alt={course.CourseName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Course Content */}
        <div className="p-6 relative z-10 text-black bg-gradient-to-br">
          <h5 className="mb-2 text-xl font-semibold">{course.CourseName}</h5>
          <p className="text-base font-light leading-relaxed">{course.desc}</p>
        </div>

        {/* Read More Button */}
        <div className="p-6 pt-0">
          <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="flex items-center gap-2">
              Read More
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  );
};

export default CourseOffered;

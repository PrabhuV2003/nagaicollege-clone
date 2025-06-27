import React from "react";
import HeroSection from "../components/HeroSection";
import Welcome from "../components/Welcome";
import VissionMission from "../components/VissionMission";
import CourseOffered from "../components/CourseOffered";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Nagai College Clone</title>
        <meta name="description" content="Clone of Nagai College website" />
      </Helmet>

      <HeroSection />
      <Welcome />
      <VissionMission />
      <CourseOffered />
    </div>
  );
};

export default Home;

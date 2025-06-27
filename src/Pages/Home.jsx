import React from 'react'
import HeroSection from '../components/HeroSection'
import Welcome from '../components/Welcome'
import VissionMission from '../components/VissionMission'
import CourseOffered from '../components/CourseOffered'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Welcome/>
      <VissionMission/>
      <CourseOffered/>
    </div>
  )
}

export default Home
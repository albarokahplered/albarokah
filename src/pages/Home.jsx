import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import PrayerSchedule from '../components/sections/PrayerSchedule';
import Agenda from '../components/sections/Agenda';
import News from '../components/sections/News';
import Gallery from '../components/sections/Gallery';
import Finance from '../components/sections/Finance';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <PrayerSchedule />
      <Agenda />
      <News />
      <Gallery />
      <Finance />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;

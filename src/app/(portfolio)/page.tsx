"use client";
import Navbar from "../components/Navbar";
import Hero1 from "../components/Hero1";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Tech from "../components/Tech";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero1 />
      <Tech/>
      <div id="projects">
        <Project />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

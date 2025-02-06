import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Dishes from "./Dishes";
import About from "./About";
import Mission from "./Mission";
import Expertise from "./Expertise";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Dishes />
      <About/>
      <Mission />
      <Expertise />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;

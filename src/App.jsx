import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection /> 
      <NavBar />
    </main>
  );
};

export default App;

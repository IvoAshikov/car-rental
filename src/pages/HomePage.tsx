import BookingSection from "../components/BookingSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StepsSection from "../components/StepsSection";
import Vehicles from "../components/Vehicles";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookingSection />
      <StepsSection />
      <Vehicles />
    </>
  );
}

export default HomePage;

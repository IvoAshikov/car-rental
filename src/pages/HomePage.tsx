import BookingSection from "../components/BookingSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StepsSection from "../components/StepsSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookingSection />
      <StepsSection />
    </>
  );
}

export default HomePage;

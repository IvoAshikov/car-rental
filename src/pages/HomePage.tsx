import BannerSection from "../components/BannerSection";
import BookingSection from "../components/BookingSection";
import ChooseUsSection from "../components/ChooseUsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StepsSection from "../components/StepsSection";
import ToTop from "../components/ToTop";
import Vehicles from "../components/Vehicles";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookingSection />
      <StepsSection />
      <Vehicles />
      <BannerSection />
      <ChooseUsSection />
      <FAQSection />
      <Footer />
      <ToTop />
    </>
  );
}

export default HomePage;

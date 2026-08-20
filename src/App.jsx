import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopRentalCars from './components/TopRentalCars';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import BottomNav from './components/BottomNav';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpenBooking = (car = null) => {
    setSelectedCar(car);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="pb-16 md:pb-0">
      <Navbar onBook={() => handleOpenBooking()} />
      <Hero />
      <TopRentalCars onBook={(car) => handleOpenBooking(car)} />
      <HowItWorks />
      <About />
      <Locations />
      <Testimonials />
      <FAQAccordion />
      <CTABanner onBook={() => handleOpenBooking()} />
      <Footer />

      {/* MOBILE APP-LIKE BOTTOM NAVIGATION BAR */}
      <BottomNav onBook={() => handleOpenBooking()} />

      {/* INTERACTIVE BOOKING MODAL & SUPABASE INTEGRATION */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        car={selectedCar}
      />
    </div>
  );
}

export default App;

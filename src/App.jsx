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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopRentalCars />
      <HowItWorks />
      <About />
      <Locations />
      <Testimonials />
      <FAQAccordion />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;

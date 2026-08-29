import { useState } from 'react';
import CustomDateTimePicker from './CustomDateTimePicker';
import heroLuxuryCar from '../assets/hero_luxury_car.jpg';
import scorpioImg from '../assets/cars/scorpio.png';
import innovaImg from '../assets/cars/innova.png';
import swiftImg from '../assets/cars/swift.png';
import wagonrImg from '../assets/cars/wagonr.png';
import balenoImg from '../assets/cars/baleno.png';

export default function Hero() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [pickupLocation, setPickupLocation] = useState('Jamia Nagar | Okhla');
  const [selectedType, setSelectedType] = useState('All Body Styles');
  const [selectedService, setSelectedService] = useState('Self & Chauffeur');
  const [maxPrice, setMaxPrice] = useState('Any Price');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL VEHICLES');

  const carShowcaseList = [
    {
      name: 'Mercedes / Luxury Sedan',
      price: '₹4,500/day',
      type: 'Luxury Sedan • Automatic',
      img: heroLuxuryCar,
      tag: 'PREMIUM CHOICE',
      badge: 'Chauffeur Driven'
    },
    {
      name: 'Mahindra Scorpio-N',
      price: '₹3,500/day',
      type: 'SUV • 7 Seater',
      img: scorpioImg,
      tag: 'POPULAR SUV',
      badge: 'Self & Driver'
    },
    {
      name: 'Toyota Innova Hycross',
      price: '₹4,500/day',
      type: 'SUV • Hybrid 7-Seater',
      img: innovaImg,
      tag: 'FAMILY LUXURY',
      badge: 'Chauffeur Driven'
    },
    {
      name: 'Maruti Swift',
      price: '₹1,600/day',
      type: 'Hatchback • Petrol',
      img: swiftImg,
      tag: 'BEST VALUE',
      badge: 'Self Drive'
    },
    {
      name: 'Maruti WagonR',
      price: '₹1,500/day',
      type: 'Hatchback • CNG / Petrol',
      img: wagonrImg,
      tag: 'BUDGET FRIENDLY',
      badge: 'Self Drive'
    },
    {
      name: 'Maruti Baleno',
      price: '₹1,800/day',
      type: 'Hatchback • Premium',
      img: balenoImg,
      tag: 'COMFORT HATCH',
      badge: 'Self Drive'
    }
  ];

  const currentCar = carShowcaseList[activeCarIndex];

  const locations = [
    'Jamia Nagar | Okhla',
    'Connaught Place, Delhi',
    'Cyber Hub, Gurgaon',
    'Sector 18, Noida',
    'Aerocity, Delhi',
  ];

  const bodyStyles = ['All Body Styles', 'Hatchback', 'Sedan', 'SUV', '7-Seater'];
  const serviceOptions = ['Self & Chauffeur', 'Self Drive Only', 'With Driver Only'];
  const priceRanges = ['Any Price', 'Under ₹1,800/day', '₹1,800 - ₹3,500/day', '₹3,500+/day'];
  const categories = ['ALL VEHICLES', 'HATCHBACKS', 'SEDANS', 'SUVS', '7-SEATERS'];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-100 via-slate-50 to-white pt-8 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-full max-w-3xl h-96 bg-gradient-to-bl from-red-100/50 via-slate-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* TWO COLUMN HERO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          
          {/* LEFT COLUMN: TYPOGRAPHY & CALL TO ACTION */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Red Accent Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-red-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                QUALITY CARS • TRUSTED SERVICE IN JAMIA NAGAR
              </span>
            </div>

            {/* Headline matching Reference Image 2 Style */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.08] tracking-tight mb-5">
              FIND YOUR <br />
              <span className="text-red-600">PERFECT RIDE</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
              Explore our wide selection of quality vehicles for self-drive and with-driver rentals across Jamia Nagar, Okhla, and Delhi NCR at unbeatable prices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#cars"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/40 active:scale-95 transition duration-200 text-center uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <span>BROWSE INVENTORY</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="tel:+919540717869"
                className="w-full sm:w-auto bg-white hover:bg-slate-900 hover:text-white text-slate-900 border-2 border-slate-900 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl transition duration-200 text-center uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>CALL: 9540717869</span>
              </a>
            </div>

            {/* Quick Trust Pillars Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 w-full max-w-xl">
              <div>
                <p className="text-xs sm:text-sm font-black text-slate-900">100% Insured</p>
                <p className="text-[11px] text-slate-500 font-medium">Clean & Verified</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-slate-900">Jamia Nagar Hub</p>
                <p className="text-[11px] text-slate-500 font-medium">Instant Pickup</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-slate-900">₹1,500/day</p>
                <p className="text-[11px] text-slate-500 font-medium">Starting Price</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-RES FEATURED CAR SHOWCASE */}
          <div className="lg:col-span-6 relative">
            
            {/* Featured Car Presentation Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200/90 group">
              
              {/* Top Floating Rating & Tag Badges */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="text-amber-500 text-xs font-black">★ 4.9</span>
                <span className="text-[11px] font-bold text-slate-800">Jamia Nagar Rated</span>
              </div>

              <div className="absolute top-4 right-4 z-20 bg-red-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                {currentCar.price}
              </div>

              {/* Main Featured Image */}
              <div className="relative w-full h-[260px] sm:h-[340px] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={currentCar.img}
                  alt={currentCar.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Bottom Overlay Info inside image */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold bg-red-600/90 px-2.5 py-0.5 rounded-md text-white mb-1 inline-block">
                      {currentCar.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-md">
                      {currentCar.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {currentCar.type}
                    </p>
                  </div>

                  <a
                    href="#cars"
                    className="bg-white/90 hover:bg-white text-slate-900 font-extrabold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition shadow-md whitespace-nowrap"
                  >
                    View Details →
                  </a>
                </div>
              </div>

              {/* Interactive Thumbnail Selector Dock */}
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-1.5 overflow-x-auto scrollbar-none">
                {carShowcaseList.map((car, idx) => (
                  <button
                    key={car.name}
                    type="button"
                    onClick={() => setActiveCarIndex(idx)}
                    className={`px-3 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition duration-200 flex items-center gap-1.5 ${
                      activeCarIndex === idx
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{car.name.split('/')[0]}</span>
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* FLOATING DARK SEARCH / FILTER BAR (MATCHING REFERENCE IMAGE 2) */}
        <div className="relative z-20 bg-slate-900 text-white rounded-3xl shadow-2xl p-5 sm:p-7 border border-slate-800 animate-fade-in-scale">
          
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            
            {/* SEARCH DOCK ROW HEADER & TITLE */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <h3 className="text-base sm:text-lg font-black tracking-wide text-white flex items-center gap-2 uppercase">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>FIND YOUR NEXT CAR</span>
              </h3>

              <div className="text-xs text-slate-400 font-semibold flex items-center gap-2">
                <span>Fast Booking in 2 Minutes</span>
                <span className="text-red-500 font-bold">•</span>
                <span className="text-red-400 font-bold">Jamia Nagar, Okhla</span>
              </div>
            </div>

            {/* 4 SELECT INPUTS + SEARCH BUTTON GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end pt-1">
              
              {/* Field 1: Body Style / Make */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Body Style
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                >
                  {bodyStyles.map((style) => (
                    <option key={style} value={style} className="bg-slate-900 text-white">
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 2: Pickup Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Pickup Location
                </label>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc} className="bg-slate-900 text-white">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 3: Service Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Rental Mode
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 4: Max Price */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Max Budget
                </label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-3 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                >
                  {priceRanges.map((pr) => (
                    <option key={pr} value={pr} className="bg-slate-900 text-white">
                      {pr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Red Search Inventory CTA Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/40 active:scale-95 transition duration-200 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>SEARCH INVENTORY</span>
                </button>
              </div>

            </div>

            {/* CATEGORY QUICK FILTER BUTTONS (MATCHING REFERENCE IMAGE 2 SUB-HEADER) */}
            <div className="pt-3 flex items-center justify-between flex-wrap gap-2 text-xs border-t border-slate-800/70">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
                <span className="text-slate-400 font-bold uppercase text-[11px] mr-1">Browse By:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategoryFilter(cat);
                      const carsSec = document.getElementById('cars');
                      if (carsSec) carsSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg font-bold text-[11px] uppercase tracking-wider transition ${
                      activeCategoryFilter === cat
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <a
                href="#cars"
                className="text-red-400 hover:text-red-300 font-bold text-xs flex items-center gap-1 transition ml-auto"
              >
                <span>Advanced Search</span>
                <span>∨</span>
              </a>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}


import { useState } from 'react';
import heroCarImg from '../assets/hero-car.jpg';
import CustomDateTimePicker from './CustomDateTimePicker';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Search Cars');
  const [pickupLocation, setPickupLocation] = useState('Connaught Place, Delhi');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const locations = [
    'Connaught Place, Delhi',
    'Cyber Hub, Gurgaon',
    'Sector 18, Noida',
    'Aerocity, Delhi',
    'Indirapuram, Ghaziabad',
    'Golf Course Road, Gurgaon',
  ];

  const searchTabs = ['Search Cars', 'Body Type', 'Price Range', 'Advanced Search'];

  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-slate-100 pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 relative overflow-x-clip">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* TWO COLUMN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 mb-12 sm:mb-16">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-scale">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs tracking-wider uppercase border border-red-200/60 shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Self-Drive Car Rental Delhi-NCR</span>
            </div>

            {/* Bold Sans-Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-4">
              Find Your Perfect Car Drive Your <span className="text-red-500">Freedom</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
              Explore 150+ verified self-drive cars with doorstep delivery. Starting from <strong className="text-slate-900 font-bold">₹99/hour</strong> with zero security deposit options.
            </p>

            {/* 3 STAT HIGHLIGHTS WITH ICONS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 border-t border-slate-200/80 w-full max-w-lg">
              
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9h18v6H3V9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900 leading-none">150+</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Active Vehicles</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900 leading-none">Verified</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Fleet Service</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900 leading-none">Best Prices</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Market Leading</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN - CAR SHOWCASE */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center animate-fade-in-scale">
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-white bg-white group">
              <img
                src={heroCarImg}
                alt="Luxury rental car"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Floating Customer Rating Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Customer Rating</p>
                  <p className="text-sm font-extrabold text-slate-900">4.9 / 5.0 (2,400+ reviews)</p>
                </div>
              </div>

              {/* Floating Active Badge */}
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>Delhi NCR Live</span>
              </div>
            </div>
          </div>

        </div>

        {/* ELEVATED SEARCH / FILTER BAR OVERLAPPING HERO BOTTOM EDGE */}
        <div className="relative z-30 bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 p-4 sm:p-6 animate-fade-in-scale">
          
          {/* SEARCH TABS */}
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-5 overflow-x-auto scrollbar-none">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-red-500 text-white shadow-md shadow-red-500/25'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT FORM */}
          {activeTab === 'Search Cars' && (
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-end">
              
              {/* Pickup Location */}
              <div className="sm:col-span-12 lg:col-span-4 flex flex-col gap-1.5 relative z-10">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Pickup Location
                </label>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition duration-150"
                >
                  {locations.map((loc, idx) => (
                    <option key={idx} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup Date Component */}
              <div className="sm:col-span-6 lg:col-span-3 relative z-30">
                <CustomDateTimePicker
                  label="Pickup Date"
                  value={pickupDate}
                  onChange={(val) => setPickupDate(val)}
                  icon={
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </div>

              {/* Return Date Component */}
              <div className="sm:col-span-6 lg:col-span-3 relative z-20">
                <CustomDateTimePicker
                  label="Return Date"
                  value={returnDate}
                  onChange={(val) => setReturnDate(val)}
                  icon={
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
              </div>

              {/* Search Cars Button */}
              <div className="sm:col-span-12 lg:col-span-2 mt-1 sm:mt-0 relative z-10">
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 active:scale-[0.98] transition duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search Cars</span>
                </button>
              </div>

            </form>
          )}

          {activeTab === 'Body Type' && (
            <div className="flex flex-wrap gap-3 py-2">
              {['All', 'Hatchback', 'Sedan', 'SUV', '7-Seater'].map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBodyType(b)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                    selectedBodyType === b
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'Price Range' && (
            <div className="flex flex-wrap gap-3 py-2">
              {['All Prices', 'Under ₹100/hr', '₹100 - ₹200/hr', '₹200+/hr'].map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPriceRange(p)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                    selectedPriceRange === p
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'Advanced Search' && (
            <div className="p-3 text-xs font-medium text-slate-600">
              Select your pickup hub, fuel preference (Petrol/Diesel/CNG), and transmission type in the Fleet section below.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

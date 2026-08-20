import { useState } from 'react';
import scorpioCar from '../assets/cars/scorpio.png';
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
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 pt-8 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background Glowing Spotlight Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* TWO COLUMN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 mb-10 sm:mb-16">
          
          {/* LEFT COLUMN: HEADLINE & STATS */}
          <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-scale">
            
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 font-extrabold text-[11px] sm:text-xs tracking-wider uppercase border border-red-200/80 shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-md shadow-red-500/50" />
              <span>Delhi NCR Premier Self-Drive Fleet</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight mb-4">
              Rent a Car, Drive Your <span className="text-red-500">Freedom</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-xl leading-relaxed font-medium">
              Book sanitized self-drive SUVs & Hatchbacks with instant doorstep delivery across Delhi, Gurgaon, Noida, and Ghaziabad. Starting @ <strong className="text-slate-900 font-bold">₹99/hour</strong>.
            </p>

            {/* 3 STAT HIGHLIGHTS - FLUID RESPONSIVE FOR ALL MOBILE PHONE SIZES */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-6 pt-4 border-t border-slate-200/80 w-full max-w-xl">
              
              <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-red-50 text-red-500 border border-red-100 flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-base shadow-xs">
                  🚗
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight whitespace-nowrap">150+ Fleet</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5 whitespace-nowrap">Active Cars</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-red-50 text-red-500 border border-red-100 flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-base shadow-xs">
                  📍
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight whitespace-nowrap">Doorstep</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5 whitespace-nowrap">NCR Delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-red-50 text-red-500 border border-red-100 flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-base shadow-xs">
                  ⚡
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight whitespace-nowrap">₹0 Deposit</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5 whitespace-nowrap">Zero Hidden Fees</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: 3D FLOATING TRANSPARENT CAR SHOWCASE (100% CLEAN & BLENDED) */}
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center animate-fade-in-scale">
            
            {/* Glowing 3D Backdrop Spotlight */}
            <div className="relative w-full max-w-lg h-64 sm:h-96 flex items-center justify-center">
              
              {/* Radial Light Ring */}
              <div className="absolute inset-0 m-auto w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-red-500/20 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* FLOATING 3D CAR PNG */}
              <img
                src={scorpioCar}
                alt="Mahindra Scorpio N 3D Self-Drive Car"
                className="w-[95%] sm:w-[100%] max-h-72 sm:max-h-80 object-contain relative z-20 mix-blend-multiply filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] animate-float-3d transition-transform duration-500 hover:scale-105"
              />

              {/* 3D Floor Shadow */}
              <div className="absolute bottom-2 inset-x-10 h-5 bg-slate-900/20 rounded-full blur-xl z-10 scale-y-50 pointer-events-none" />

              {/* Floating Badge: Top Right Price */}
              <div className="absolute top-2 right-2 sm:right-4 z-30 bg-slate-900 text-white px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-xl flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-black">Starting @ ₹99/hr</span>
              </div>

              {/* Floating Badge: Bottom Left Rating */}
              <div className="absolute bottom-2 left-2 sm:left-4 z-30 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-2xl border border-slate-200/80 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-400 text-slate-900 font-black flex items-center justify-center text-xs shadow-xs">
                  ★
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase">Customer Rating</p>
                  <p className="text-[11px] sm:text-xs font-extrabold text-slate-900">4.9 / 5.0 (2,400+ Reviews)</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ELEVATED SEARCH / FILTER BAR */}
        <div className="relative z-30 bg-white text-slate-900 rounded-3xl shadow-2xl p-4 sm:p-6 animate-fade-in-scale border border-slate-200/80">
          
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
                <a
                  href="#cars"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 active:scale-[0.98] transition duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search Cars</span>
                </a>
              </div>

            </form>
          )}

          {activeTab === 'Body Type' && (
            <div className="flex flex-wrap gap-3 py-2">
              {['All', 'Hatchback', 'Sedan', 'SUV', '7-Seater'].map((b) => (
                <button
                  key={b}
                  type="button"
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
                  type="button"
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

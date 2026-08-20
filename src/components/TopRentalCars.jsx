import { useState, useRef } from 'react';
import { cars } from '../data/cars';
import CarCard from './CarCard';
import ScrollReveal from './ScrollReveal';
import BrowseByType from './BrowseByType';

export default function TopRentalCars() {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollContainerRef = useRef(null);

  const categories = ['All', 'Hatchback', 'Sedan', 'SUV'];

  const filteredCars = activeFilter === 'All' 
    ? cars 
    : cars.filter((car) => car.type.toLowerCase() === activeFilter.toLowerCase());

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* BROWSE BY CATEGORY CORAL BANNER */}
      <BrowseByType
        activeFilter={activeFilter}
        onSelectFilter={(type) => {
          setActiveFilter(type);
          const el = document.getElementById('cars');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* TOP SELLING CARS SECTION */}
      <section id="cars" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto">
          
          {/* SECTION HEADER & ARROW BUTTONS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
                Top Selling Cars in Delhi NCR
              </h2>
            </div>

            {/* RIGHT SIDE: FILTERS + DESKTOP-ONLY ARROW BUTTONS */}
            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap justify-between sm:justify-end">
              
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition duration-200 ${
                      activeFilter === cat
                        ? 'bg-red-500 text-white shadow-md shadow-red-500/25'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Circular Carousel Arrow Navigation Buttons (Hidden on mobile, visible on desktop) */}
              <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-xs active:scale-95"
                  aria-label="Scroll Left"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-xs active:scale-95"
                  aria-label="Scroll Right"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* HORIZONTAL CAROUSEL CONTAINER WITH TOUCH SWIPE & SNAP POINTS */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredCars.map((car) => (
              <div key={car.id} className="w-[300px] sm:w-[350px] flex-shrink-0 snap-start">
                <CarCard car={car} />
              </div>
            ))}
          </div>

        </ScrollReveal>
      </section>
    </>
  );
}

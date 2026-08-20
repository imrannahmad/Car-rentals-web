import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Locations() {
  const scrollContainerRef = useRef(null);

  const hubs = [
    { city: 'Delhi', location: 'Connaught Place & Aerocity', vehicles: '60+ Cars' },
    { city: 'Gurgaon', location: 'Cyber Hub & Golf Course Rd', vehicles: '50+ Cars' },
    { city: 'Noida', location: 'Sector 18 & Electronic City', vehicles: '30+ Cars' },
    { city: 'Ghaziabad', location: 'Indirapuram & Vaishali', vehicles: '20+ Cars' },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER & ARROW CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2 inline-block">
              Service Network
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Key <span className="text-red-500">Delhi-NCR Hubs</span>
            </h2>
          </div>

          {/* ARROW BUTTONS (Hidden on mobile, visible on desktop) */}
          <div className="hidden sm:flex items-center gap-2 self-end sm:self-auto">
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

        {/* HORIZONTAL CAROUSEL ROW WITH TOUCH SWIPE & SNAP POINTS */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="w-[240px] sm:w-[270px] flex-shrink-0 snap-start bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-red-200 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center font-bold mb-4">
                  📍
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-1">
                  {hub.city}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {hub.location}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                  {hub.vehicles}
                </span>
                <span className="text-xs text-slate-400 font-bold">24/7 Open</span>
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

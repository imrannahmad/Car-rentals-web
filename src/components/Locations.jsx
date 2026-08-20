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
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER & ARROW CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
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
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-xs active:scale-95 text-xs font-bold"
              aria-label="Scroll Left"
            >
              ‹
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-xs active:scale-95 text-xs font-bold"
              aria-label="Scroll Right"
            >
              ›
            </button>
          </div>
        </div>

        {/* COMPACT SLIDEABLE HUB CARDS CAROUSEL */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="w-[165px] sm:w-[260px] flex-shrink-0 snap-start bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-red-200 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Location Icon Badge */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-2.5 shadow-xs">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                {/* City Title */}
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-0.5 leading-snug">
                  {hub.city}
                </h3>

                {/* Location Detail */}
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed">
                  {hub.location}
                </p>
              </div>

              {/* Bottom Row: Vehicles + 24/7 Tag */}
              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs">
                <span className="font-extrabold text-red-500 uppercase tracking-wider">
                  {hub.vehicles}
                </span>
                <span className="text-slate-400 font-bold">24/7 Open</span>
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

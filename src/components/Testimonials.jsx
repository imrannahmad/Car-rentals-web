import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Rohan Sharma',
      location: 'Gurgaon, HR',
      avatar: 'RS',
      review: 'Rented a Swift for a weekend trip to Jaipur. Car was super clean, delivered right to my apartment in Cyber City. Smooth process!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Verma',
      location: 'South Delhi, DL',
      avatar: 'PV',
      review: 'TripOnn made my shopping trips so convenient. No security deposit hassles, instant key handover, and zero hidden charges. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Noida, UP',
      avatar: 'AP',
      review: 'Booked Creta for a family trip to Agra. Exceptional service, 24/7 customer support was very helpful when we extended by 4 hours effortlessly.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Siddharth Mehta',
      location: 'Aerocity, DL',
      avatar: 'SM',
      review: 'Prompt doorstep delivery at Aerocity Delhi. Clean interior, smooth automatic gear transmission, and super transparent billing. My go-to rental in NCR.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Neha Kapoor',
      location: 'Indirapuram, UP',
      avatar: 'NK',
      review: 'Very economical CNG option for running errands around Noida. Booking took under 2 minutes on my phone. Will definitely use TripOnn again!',
      rating: 5,
    },
  ];

  // Tripled reviews array for seamless infinite looping
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* SECTION HEADER & ARROW BUTTONS (VISIBLE ON MOBILE & DESKTOP) */}
        <div className="flex flex-row items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2 inline-block">
              Testimonials
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our <span className="text-red-500">Customers Say</span>
            </h2>
          </div>

          {/* MINIMALIST SLEEK ARROW BUTTONS (VISIBLE ON MOBILE & DESKTOP) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 self-end pb-1 z-10">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/90 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-xs active:scale-95 text-base font-bold cursor-pointer"
              aria-label="Scroll Left"
            >
              ‹
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200/90 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 flex items-center justify-center transition shadow-xs active:scale-95 text-base font-bold cursor-pointer"
              aria-label="Scroll Right"
            >
              ›
            </button>
          </div>
        </div>

      </ScrollReveal>

      {/* CONTINUOUS SEAMLESS MARQUEE TICKER (AUTO SLIDES CONTINUOUSLY 60FPS) */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-3"
      >
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-4 sm:gap-6 px-4">
          {infiniteReviews.map((r, idx) => (
            <div
              key={`${r.id}-${idx}`}
              className="w-[280px] sm:w-[350px] flex-shrink-0 bg-slate-50/90 hover:bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* 5-Star Row */}
              <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-5">
                "{r.review}"
              </p>

              {/* User Avatar + Name + Location */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                  {r.avatar}
                </div>
                <div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {r.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

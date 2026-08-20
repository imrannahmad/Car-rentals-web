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
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER & ARROW BUTTONS */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2 inline-block">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our <span className="text-red-500">Customers Say</span>
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

        {/* HORIZONTAL CAROUSEL ROW */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="w-[300px] sm:w-[360px] flex-shrink-0 snap-start bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              {/* 5-Star Row */}
              <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                "{r.review}"
              </p>

              {/* User Avatar + Name + Location */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60 mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                  {r.avatar}
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {r.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

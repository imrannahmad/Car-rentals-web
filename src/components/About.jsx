import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const scrollContainerRef = useRef(null);

  const stats = [
    {
      id: 1,
      value: '5,000+',
      label: 'Happy Drivers',
      highlight: true,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      value: '150+',
      label: 'Active Vehicles',
      highlight: false,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9h18v6H3V9z" />
        </svg>
      ),
    },
    {
      id: 3,
      value: '24 / 7',
      label: 'Roadside Support',
      highlight: false,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      value: '4.9 ★',
      label: 'Average Rating',
      highlight: true,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      id: 5,
      value: '100%',
      label: 'Doorstep Delivery',
      highlight: true,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      value: '₹0',
      label: 'Hidden Charges',
      highlight: false,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
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
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto">
        
        {/* TOP ABOUT US CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3.5 py-1 rounded-full mb-3 inline-block">
              Tour & Travels | Jamia Nagar • Okhla
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              About <span className="text-red-500">Okhla Car Rental</span> & Tour Travels
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium max-w-2xl">
              Okhla Car Rental & Tour Travels is Jamia Nagar & Okhla’s premier vehicle service provider in Delhi NCR. We provide affordable self-drive cars, experienced chauffeur-driven vehicles, and customized tour & travels packages with starting price location Delhi NCR from ₹1,500/day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-xs sm:text-sm font-semibold mb-6 w-full max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Self Drive & With Driver Options</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Tour & Travels Jamia Nagar | Okhla</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>Starting Price ₹1,500/- in Delhi NCR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✓</span>
                <span>24/7 Roadside Assistance & Booking</span>
              </div>
            </div>

            <a
              href="tel:+919540717869"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition duration-200 shadow-md text-xs sm:text-sm"
            >
              Call Us Now (+91 9540717869)
            </a>
          </div>

          {/* RIGHT SIDE SUMMARY CARD */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-red-500/20 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full inline-block mb-3 border border-red-500/20">
              Okhla Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3">Driven by Trust & Excellence</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Thousands of satisfied customers trust Okhla Car Rental for local commuting, outstation trips, family vacations, and chauffeur services across Delhi NCR.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
              <span className="text-white font-extrabold text-sm">4.9 ★★★★★</span>
              <span>•</span>
              <span>Jamia Nagar | Okhla HQ</span>
            </div>
          </div>

        </div>

        {/* COMPACT SLIDEABLE STATS HEADER */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 pt-4 border-t border-slate-100">
          <div>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Okhla Car Rental by <span className="text-red-500">The Numbers</span>
            </h3>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2">
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

        {/* COMPACT SLIDEABLE STAT CARDS CAROUSEL (Tight & Sleek on Mobile) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {stats.map((s) => (
            <div
              key={s.id}
              className="w-[155px] sm:w-[230px] flex-shrink-0 snap-start bg-slate-50/80 hover:bg-white p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-red-200 hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col items-center justify-between"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border border-slate-100 text-red-500 flex items-center justify-center mb-2.5 shadow-xs">
                {s.icon}
              </div>

              <p className={`text-2xl sm:text-3xl font-black mb-0.5 tracking-tight ${
                s.highlight ? 'text-red-500' : 'text-slate-900'
              }`}>
                {s.value}
              </p>

              <p className="text-[10px] sm:text-xs text-slate-500 font-extrabold uppercase tracking-wider leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onBook }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // LOCK BODY SCROLL WHEN MOBILE MENU DRAWER IS OPEN
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleBookClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onBook) onBook();
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between relative">
          
          {/* MOBILE ONLY: MENU HAMBURGER BUTTON ON THE FAR LEFT */}
          <div className="flex md:hidden items-center z-10">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-slate-700 hover:text-red-500 focus:outline-none rounded-xl active:bg-slate-100 transition"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* LOGO: CLEAN MIX-BLEND MULTIPLY (ZERO WHITE BOX) */}
          <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start">
            <a href="#" className="flex items-center gap-2 group transition duration-200 py-1">
              <img
                src={logoImg}
                alt="TripOnn Car Rental"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[180px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* CENTER: DESKTOP NAVIGATION LINKS (HIDDEN ON MOBILE) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#" className="text-slate-900 font-bold hover:text-red-500 transition duration-150">Home</a>
            <a href="#cars" className="hover:text-red-500 transition duration-150">Fleet</a>
            <a href="#how-it-works" className="hover:text-red-500 transition duration-150">How It Works</a>
            <a href="#about" className="hover:text-red-500 transition duration-150">About Us</a>
            <a href="#faq" className="hover:text-red-500 transition duration-150">FAQ</a>
          </nav>

          {/* RIGHT: CONTACT & BOOK NOW CTA (DESKTOP) + PHONE ICON (MOBILE) */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Mobile Right Call Action Button */}
            <a
              href="tel:+919557273446"
              className="flex md:hidden w-9 h-9 rounded-full bg-red-50 text-red-500 items-center justify-center shadow-xs active:scale-95 transition"
              aria-label="Call Support"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>

            {/* Desktop Right Call + Book Button */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+919557273446"
                className="flex items-center gap-2 text-slate-800 hover:text-red-500 font-bold text-sm transition duration-150 group"
              >
                <div className="w-9 h-9 rounded-full bg-red-50 group-hover:bg-red-500 text-red-500 group-hover:text-white flex items-center justify-center transition duration-200 shadow-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="tracking-tight">+91 9557273446</span>
              </a>

              <button
                type="button"
                onClick={handleBookClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/35 active:scale-95 transition duration-200 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* MOBILE LEFT SLIDE-IN DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Dark Semi-Transparent Backdrop - Prevent Background Scroll */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Full-Height Left Drawer Panel */}
          <div className="fixed top-0 left-0 bottom-0 w-[290px] max-w-[85vw] bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-[1000] animate-slide-in-left overflow-y-auto">
            
            <div>
              {/* Drawer Top Header: Clean Logo Image + Close Button */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <img
                  src={logoImg}
                  alt="TripOnn Car Rental"
                  className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm transition"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Options List */}
              <nav className="flex flex-col gap-1.5">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-900 font-bold py-3 px-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition text-sm flex items-center justify-between border-b border-slate-50"
                >
                  <span>Home</span>
                  <span className="text-red-500 font-bold">→</span>
                </a>
                <a
                  href="#cars"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-3 px-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition text-sm flex items-center justify-between border-b border-slate-50"
                >
                  <span>Our Fleet</span>
                  <span className="text-slate-300">→</span>
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-3 px-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition text-sm flex items-center justify-between border-b border-slate-50"
                >
                  <span>How It Works</span>
                  <span className="text-slate-300">→</span>
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-3 px-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition text-sm flex items-center justify-between border-b border-slate-50"
                >
                  <span>About Us</span>
                  <span className="text-slate-300">→</span>
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-3 px-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition text-sm flex items-center justify-between"
                >
                  <span>FAQ</span>
                  <span className="text-slate-300">→</span>
                </a>
              </nav>
            </div>

            {/* Drawer Bottom Action Options */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 mt-6">
              <a
                href="tel:+919557273446"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 text-red-600 font-bold text-sm shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call +91 9557273446</span>
              </a>

              <button
                type="button"
                onClick={handleBookClick}
                className="w-full text-center bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-3 rounded-xl shadow-md shadow-red-500/20 cursor-pointer"
              >
                Book Now
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

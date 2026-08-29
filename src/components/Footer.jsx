import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-400 py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
        
        {/* Col 1: Brand Logo & Intro (Span 4) */}
        <div className="md:col-span-4 flex flex-col items-start">
          
          {/* Logo with Brand Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 to-red-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-red-500/30">
              O
            </div>
            <div>
              <h3 className="text-xl font-black text-white leading-none tracking-tight">
                OKHLA <span className="text-red-500">CAR RENTAL</span>
              </h3>
              <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                Tour & Travels • Jamia Nagar | Okhla
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-6 max-w-sm">
            Jamia Nagar & Okhla's leading service for self-drive cars, luxury chauffeur-driven vehicles (rent a car with driver), and Tour & Travels packages in Delhi NCR. Starting @ ₹1,500/day.
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-300">
            <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span>🚘</span> Self Drive & With Driver
            </span>
            <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span>📍</span> Jamia Nagar | Okhla HQ
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links (Span 3) */}
        <div className="md:col-span-3">
          <h4 className="font-black text-white text-base tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>Quick Links</span>
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            <li><a href="#" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Home</a></li>
            <li><a href="#cars" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Our Fleet & Drivers</a></li>
            <li><a href="#how-it-works" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Tour & Travel Packages</a></li>
            <li><a href="#about" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> About Us</a></li>
            <li><a href="#faq" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> FAQ</a></li>
          </ul>
        </div>

        {/* Col 3: Popular Hubs (Span 2) */}
        <div className="md:col-span-2">
          <h4 className="font-black text-white text-base tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>Key Hubs</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-400">
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Jamia Nagar (HQ)</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Okhla Phase 1, 2, 3</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Connaught Place</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Cyber Hub Gurgaon</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Sector 18 Noida</li>
          </ul>
        </div>

        {/* Col 4: Contact & Support (Span 3) */}
        <div className="md:col-span-3 flex flex-col items-start">
          <h4 className="font-black text-white text-base tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>Contact & Support</span>
          </h4>
          
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl w-full mb-4">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-1">24/7 Helpline & Booking</p>
            <a href="tel:+919540717869" className="text-base sm:text-lg font-black text-white hover:text-red-400 transition block">
              +91 9540717869
            </a>
            <p className="text-[11px] text-red-400 font-bold mt-1">
              Location: Jamia Nagar | Okhla, Delhi NCR
            </p>
            <p className="text-[11px] text-emerald-400 font-bold mt-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Rent with Driver & Self Drive
            </p>
          </div>

          <div className="flex items-center gap-2 w-full">
            <a
              href="tel:+919540717869"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl transition shadow-lg shadow-red-500/25 text-center"
            >
              Call Support
            </a>
            <a
              href="https://wa.me/919540717869"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl transition shadow-lg shadow-emerald-600/25 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT & CREDITS WATERMARK */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
        <div>
          © {new Date().getFullYear()} Okhla Car Rental & Tour Travels. All rights reserved.
        </div>
        <div className="text-slate-400 font-semibold">
          Design & Develop by{' '}
          <a
            href="https://nexasite.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-red-400 font-extrabold underline underline-offset-2 transition"
          >
            NexaSite WebStudio.
          </a>
        </div>
      </div>
    </footer>
  );
}


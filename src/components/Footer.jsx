import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-400 py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
        
        {/* Col 1: Brand Logo & Intro (Span 4) */}
        <div className="md:col-span-4 flex flex-col items-start">
          
          {/* Logo with Background Removal (Mix-Blend Lighten - No White Box) */}
          <div className="mb-5 inline-block">
            <img
              src={logoImg}
              alt="TripOnn Car Rental Logo"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] object-contain mix-blend-lighten filter brightness-120"
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-6 max-w-sm">
            Premier self-drive car rentals across Delhi, Gurgaon, Noida, and Ghaziabad. Hourly, daily, and weekly bookings with zero hidden charges.
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-300">
            <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span>🚗</span> 150+ Verified Fleet
            </span>
            <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span>📍</span> Doorstep NCR Delivery
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
            <li><a href="#cars" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Our Fleet</a></li>
            <li><a href="#how-it-works" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> Why Choose Us</a></li>
            <li><a href="#about" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> About Us</a></li>
            <li><a href="#faq" className="hover:text-red-400 transition flex items-center gap-1.5"><span className="text-slate-600">›</span> FAQ</a></li>
          </ul>
        </div>

        {/* Col 3: Popular Hubs (Span 2) */}
        <div className="md:col-span-2">
          <h4 className="font-black text-white text-base tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>Service Hubs</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-400">
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Connaught Place</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Cyber Hub Gurgaon</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Sector 18 Noida</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Aerocity Delhi</li>
            <li className="flex items-center gap-1.5"><span className="text-red-400">•</span> Indirapuram</li>
          </ul>
        </div>

        {/* Col 4: Contact & Support (Span 3) */}
        <div className="md:col-span-3 flex flex-col items-start">
          <h4 className="font-black text-white text-base tracking-tight mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span>24/7 Helpline</span>
          </h4>
          
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl w-full mb-4">
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Direct Call Support</p>
            <a href="tel:+919557273446" className="text-base sm:text-lg font-black text-white hover:text-red-400 transition block">
              +91 9557273446
            </a>
            <p className="text-[11px] text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              24/7 Roadside Assistance
            </p>
          </div>

          <div className="flex items-center gap-2 w-full">
            <a
              href="tel:+919557273446"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs py-2.5 px-3 rounded-xl transition shadow-lg shadow-red-500/25 text-center"
            >
              Call Support
            </a>
            <a
              href="https://wa.me/919557273446"
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
          © {new Date().getFullYear()} TripOnn Car Rentals. All rights reserved.
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

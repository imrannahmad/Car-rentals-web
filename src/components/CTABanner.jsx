import ScrollReveal from './ScrollReveal';

export default function CTABanner() {
  return (
    <section id="book" className="py-16 px-4 sm:px-6 lg:px-12 bg-slate-50">
      <ScrollReveal className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl shadow-red-500/20 relative overflow-hidden">
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-block mb-4">
              Instant Car Rental Delhi-NCR
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              Ready to Drive Your Freedom Today?
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-8 font-medium max-w-xl mx-auto">
              Book your sanitized self-drive car in under 2 minutes. Flexible hourly pricing starting at ₹99/hour with zero security deposit options.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919557273446"
                className="w-full sm:w-auto bg-white text-red-600 hover:bg-slate-100 font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg transition duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call +91 9557273446</span>
              </a>

              <a
                href="#cars"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg transition duration-200 active:scale-95"
              >
                Explore Fleet
              </a>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

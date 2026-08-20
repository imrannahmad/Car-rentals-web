export default function BottomNav({ onBook }) {
  return (
    <div className="fixed bottom-4 inset-x-0 z-[99] md:hidden flex items-center justify-center pointer-events-none px-3">
      
      {/* LARGER FLOATING IPHONE GLASSMORPHISM DOCK PILL */}
      <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-2xl border border-white/25 shadow-[0_25px_50px_rgba(0,0,0,0.6)] rounded-full px-4 py-2.5 flex items-center justify-between gap-1.5 max-w-md w-full">
        
        {/* Home */}
        <a
          href="#"
          className="flex flex-col items-center gap-0.5 text-xs font-bold text-slate-300 hover:text-white transition px-2.5 py-1 rounded-full hover:bg-white/10"
        >
          <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Home</span>
        </a>

        {/* Cars */}
        <a
          href="#cars"
          className="flex flex-col items-center gap-0.5 text-xs font-bold text-slate-300 hover:text-white transition px-2.5 py-1 rounded-full hover:bg-white/10"
        >
          <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9h18v6H3V9z" />
          </svg>
          <span>Cars</span>
        </a>

        {/* Hubs */}
        <a
          href="#how-it-works"
          className="flex flex-col items-center gap-0.5 text-xs font-bold text-slate-300 hover:text-white transition px-2.5 py-1 rounded-full hover:bg-white/10"
        >
          <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Hubs</span>
        </a>

        {/* Call */}
        <a
          href="tel:+919557273446"
          className="flex flex-col items-center gap-0.5 text-xs font-bold text-slate-300 hover:text-white transition px-2.5 py-1 rounded-full hover:bg-white/10"
        >
          <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call</span>
        </a>

        {/* Book Button CTA */}
        <button
          type="button"
          onClick={() => onBook && onBook()}
          className="bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-red-500/40 active:scale-95 transition cursor-pointer flex items-center gap-1 ml-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
          <span>Book</span>
        </button>

      </div>
    </div>
  );
}

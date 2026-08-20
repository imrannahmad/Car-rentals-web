export default function CarCard({ car }) {
  if (!car) return null;

  const { name, type, pricePerHour, seats, transmission, image } = car;

  // Split name into Brand and Model (e.g., Maruti Swift -> Brand: Maruti, Model: Swift)
  const nameParts = name.split(' ');
  const brand = nameParts[0];
  const model = nameParts.slice(1).join(' ');

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
      
      {/* TOP SECTION: BRAND & MODEL (LEFT) + CAR PHOTO (RIGHT) */}
      <div className="flex items-start justify-between gap-3 mb-6">
        <div>
          <p className="text-xs font-semibold text-slate-400 tracking-wide mb-0.5">
            {model}
          </p>
          <p className="text-xs font-medium text-slate-400 mb-1">
            {transmission === 'Automatic' ? 'AT ' : ''}2024-25
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {brand}
          </h3>
        </div>

        {/* Side-Profile Floating Car Image */}
        <div className="w-32 sm:w-40 h-20 sm:h-24 flex items-center justify-end flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* MIDDLE SECTION: SPECS ICON ROW */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium py-3 border-t border-slate-100 mb-4">
        {/* Type */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9h18v6H3V9z" />
          </svg>
          <span>{type}</span>
        </div>

        {/* Transmission */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <span>{transmission || 'Manual'}</span>
        </div>

        {/* Seats */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>{seats} seats</span>
        </div>
      </div>

      {/* BOTTOM SECTION: PRICE & BOOK NOW CTA */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ₹{pricePerHour}
          </span>
          <span className="text-xs sm:text-sm text-slate-400 font-medium">
            per hour
          </span>
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-red-500/20 active:scale-95 transition duration-150">
          Book Now
        </button>
      </div>

    </div>
  );
}

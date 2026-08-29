import ScrollReveal from './ScrollReveal';

export default function BrowseByType({ activeFilter, onSelectFilter }) {
  const categories = [
    {
      name: 'Hatchback',
      desc: 'Compact & agile for city drives',
      count: '45+ Cars',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9h18v6H3V9z" />
        </svg>
      ),
    },
    {
      name: 'Sedan',
      desc: 'Comfortable premium cruising',
      count: '35+ Cars',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      name: 'SUV',
      desc: 'Spacious & powerful for highway trips',
      count: '50+ Cars',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM3 9l2.5-4h11L19 9M3 9h18v6H3V9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
      <ScrollReveal className="max-w-7xl mx-auto">
        
        {/* CORAL BANNER BOX (Matching DriveNest Browse by Category) */}
        <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-red-500/20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-2">
                Quick Selection
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Browse by Category
              </h2>
            </div>
            <p className="text-red-100 text-sm max-w-md font-medium">
              Self drive or with driver options starting @ ₹1,500/day in Jamia Nagar, Okhla & Delhi NCR.
            </p>
          </div>

          {/* CATEGORIES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => onSelectFilter && onSelectFilter(cat.name)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-start gap-4 group ${
                  activeFilter === cat.name
                    ? 'bg-white text-slate-900 border-white shadow-lg scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition duration-300 ${
                  activeFilter === cat.name ? 'bg-red-500 text-white' : 'bg-white/20 text-white'
                }`}>
                  {cat.icon}
                </div>

                <div>
                  <h3 className={`font-extrabold text-lg leading-snug ${
                    activeFilter === cat.name ? 'text-slate-900' : 'text-white'
                  }`}>
                    {cat.name}
                  </h3>
                  <p className={`text-xs mt-0.5 font-medium ${
                    activeFilter === cat.name ? 'text-slate-500' : 'text-red-100'
                  }`}>
                    {cat.desc}
                  </p>
                  <span className={`inline-block text-[11px] font-bold mt-2 uppercase tracking-wider ${
                    activeFilter === cat.name ? 'text-red-500' : 'text-white/80'
                  }`}>
                    {cat.count} →
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}

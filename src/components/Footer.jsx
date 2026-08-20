import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-12 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand Logo & Intro */}
        <div>
          <div className="bg-white p-2.5 sm:p-3 rounded-2xl inline-block mb-4 shadow-lg border border-slate-800">
            <img
              src={logoImg}
              alt="TripOnn Car Rental Logo"
              className="h-11 sm:h-13 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Premier self-drive car rentals across Delhi, Gurgaon, Noida, and Ghaziabad. Hourly, daily, and weekly bookings with zero hidden charges.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-extrabold text-white text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="#cars" className="hover:text-red-400 transition">Our Fleet</a></li>
            <li><a href="#how-it-works" className="hover:text-red-400 transition">Why Choose Us</a></li>
            <li><a href="#about" className="hover:text-red-400 transition">About Us</a></li>
            <li><a href="#faq" className="hover:text-red-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Col 3: Popular Hubs */}
        <div>
          <h4 className="font-extrabold text-white text-base mb-4">Popular Hubs</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>Connaught Place, Delhi</li>
            <li>Cyber Hub, Gurgaon</li>
            <li>Sector 18, Noida</li>
            <li>Aerocity, Delhi</li>
            <li>Indirapuram, Ghaziabad</li>
          </ul>
        </div>

        {/* Col 4: Contact & Call CTA */}
        <div>
          <h4 className="font-extrabold text-white text-base mb-4">Contact Support</h4>
          <p className="text-sm text-slate-300 mb-2 font-bold">Phone: +91 9557273446</p>
          <p className="text-xs text-slate-400 mb-4 font-medium">24/7 Roadside Assistance & Customer Service</p>
          <a
            href="tel:+919557273446"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition shadow-md shadow-red-500/20"
          >
            Call Us Now
          </a>
        </div>

      </div>

      {/* COPYRIGHT & CREDITS */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
        <div>
          © {new Date().getFullYear()} TripOnn Car Rentals. All rights reserved.
        </div>
        <div className="text-slate-500">
          Design & Develop by{' '}
          <a
            href="https://nexasite.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-red-400 font-bold underline underline-offset-2 transition"
          >
            NexaSite WebStudio.
          </a>
        </div>
      </div>
    </footer>
  );
}

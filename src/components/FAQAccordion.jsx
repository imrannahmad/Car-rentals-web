import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What documents are required to rent a self-drive car with TripOnn?',
      a: 'You only need a valid Indian Driving License (held for at least 1 year) and a government-issued ID proof like Aadhaar card or Passport.',
    },
    {
      q: 'Is fuel included in the hourly rental price?',
      a: 'Prices are listed without fuel so you only pay for what you consume. Cars are handed over with a set level of fuel and should be returned with the same fuel level.',
    },
    {
      q: 'Is there any security deposit required?',
      a: 'We offer zero security deposit options for verified users. For standard bookings, a refundable deposit of ₹1,000–₹2,000 is processed instantly upon vehicle return.',
    },
    {
      q: 'Can I get the car delivered to my doorstep in Delhi-NCR?',
      a: 'Yes! We offer doorstep delivery and pickup across Delhi, Gurgaon, Noida, Ghaziabad, and Aerocity for a minimal convenience fee.',
    },
    {
      q: 'What happens if the car breaks down during my trip?',
      a: 'We provide 24/7 Roadside Assistance across Delhi-NCR. Simply call +91 9557273446 and our technician or replacement car will reach you promptly.',
    },
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <ScrollReveal className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We’ve <span className="text-red-500">Got Answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200/80 rounded-2xl overflow-hidden transition duration-200 shadow-xs"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left font-extrabold text-slate-900 text-base flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition"
              >
                <span>{faq.q}</span>
                <span className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-red-500 transition-transform duration-200 ${
                  openIdx === idx ? 'rotate-180 bg-red-50' : ''
                }`}>
                  ↓
                </span>
              </button>

              {openIdx === idx && (
                <div className="p-5 pt-0 bg-white text-slate-600 text-sm font-medium leading-relaxed border-t border-slate-100 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

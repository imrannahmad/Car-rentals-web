import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What services does Okhla Car Rental & Tour Travels offer?',
      a: 'We offer self-drive car rentals, chauffeur-driven cars (rent a car with driver), and customized Tour & Travels packages across Jamia Nagar, Okhla, and all of Delhi-NCR.',
    },
    {
      q: 'What is the starting price for renting a car?',
      a: 'Our rental prices start from just ₹1,500/- per day for hatchback cars in Delhi-NCR location, with flexible hourly and daily rates.',
    },
    {
      q: 'What documents are required to rent a self-drive car?',
      a: 'You need a valid Indian Driving License (held for at least 1 year) and a government ID proof (Aadhaar Card or Passport).',
    },
    {
      q: 'Can I get doorstep delivery in Jamia Nagar, Okhla, or other NCR areas?',
      a: 'Yes! We provide convenient doorstep delivery and pickup across Jamia Nagar, Okhla, South Delhi, Noida, Gurgaon, and Ghaziabad.',
    },
    {
      q: 'How can I book a car or contact customer support?',
      a: 'You can book directly on our website or call/WhatsApp us 24/7 at +91 9540717869 for instant reservations.',
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

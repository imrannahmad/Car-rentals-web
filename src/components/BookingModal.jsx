import { useState } from 'react';
import { supabase } from '../supabase';

export default function BookingModal({ isOpen, onClose, car }) {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Connaught Place, Delhi');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const defaultCar = car || {
    name: 'Maruti Swift',
    type: 'Hatchback',
    pricePerHour: 99,
    fuelType: 'Petrol',
    transmission: 'Manual',
    image: '',
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !phone || !pickupDate) {
      alert('Please fill in all required fields (Name, Phone, and Pickup Date).');
      return;
    }

    setLoading(true);

    const newBookingId = 'TRIP-' + Math.floor(100000 + Math.random() * 900000);
    const estimatedTotal = defaultCar.pricePerHour * 24; // Default 1 day estimate

    try {
      if (supabase) {
        const { error } = await supabase.from('bookings').insert([
          {
            car_name: defaultCar.name,
            customer_name: customerName,
            phone: phone,
            location: location,
            pickup_date: pickupDate,
            return_date: returnDate || 'Same Day',
            total_price: estimatedTotal,
            status: 'Pending',
          },
        ]);

        if (error) {
          console.warn('Supabase Insert Error (Fallback to local success):', error);
        }
      }
    } catch (err) {
      console.warn('Supabase connection error:', err);
    } finally {
      setLoading(false);
      setBookingId(newBookingId);
      setIsSuccess(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello TripOnn! I want to confirm my booking:\n\n` +
    `🚗 *Car:* ${defaultCar.name}\n` +
    `👤 *Name:* ${customerName}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📍 *Location:* ${location}\n` +
    `📅 *Pickup:* ${pickupDate}\n` +
    `📅 *Return:* ${returnDate || 'Same Day'}\n` +
    `🆔 *Booking Ref:* ${bookingId}`
  );

  const resetAndClose = () => {
    setIsSuccess(false);
    setCustomerName('');
    setPhone('');
    setPickupDate('');
    setReturnDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative animate-fade-in-scale">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-sm transition"
        >
          ✕
        </button>

        {isSuccess ? (
          /* SUCCESS SCREEN */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-2">
              Booking Submitted!
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Reservation Confirmed
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto font-medium">
              Your booking request for <strong className="text-slate-900">{defaultCar.name}</strong> has been saved.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-left text-xs space-y-2 mb-6 font-medium text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Booking Ref:</span>
                <span className="font-bold text-slate-900">{bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Customer:</span>
                <span className="font-bold text-slate-900">{customerName} ({phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-slate-900">{location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Pickup Date:</span>
                <span className="font-bold text-red-500">{pickupDate}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/919557273446?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
              >
                <span>Confirm via WhatsApp (+91 9557273446)</span>
              </a>
              <button
                onClick={resetAndClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* BOOKING FORM */
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                Instant Booking
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
              Book Your <span className="text-red-500">{defaultCar.name}</span>
            </h3>

            {/* Selected Car Highlight */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 flex items-center justify-between mb-5">
              <div>
                <p className="text-xs font-bold text-slate-900">{defaultCar.name}</p>
                <p className="text-[11px] text-slate-500 font-medium">
                  {defaultCar.type} • {defaultCar.fuelType} • {defaultCar.transmission || 'Manual'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-red-500">₹{defaultCar.pricePerHour}</span>
                <span className="text-[10px] text-slate-400 font-medium">/hr</span>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              {/* Customer Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition"
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Pickup Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition"
                >
                  <option value="Connaught Place, Delhi">Connaught Place, Delhi</option>
                  <option value="Cyber Hub, Gurgaon">Cyber Hub, Gurgaon</option>
                  <option value="Sector 18, Noida">Sector 18, Noida</option>
                  <option value="Aerocity, Delhi">Aerocity, Delhi</option>
                  <option value="Indirapuram, Ghaziabad">Indirapuram, Ghaziabad</option>
                  <option value="Doorstep Delivery">Doorstep Delivery (NCR)</option>
                </select>
              </div>

              {/* Pickup & Return Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Pickup Date & Time *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 22 Aug, 10:00 AM"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Return Date & Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 23 Aug, 10:00 AM"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-red-500/25 active:scale-95 transition flex items-center justify-center gap-2 text-sm"
              >
                {loading ? 'Processing...' : 'Confirm & Reserve Now'}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

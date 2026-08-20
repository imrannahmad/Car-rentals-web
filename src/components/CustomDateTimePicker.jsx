import { useState, useRef, useEffect } from 'react';

export default function CustomDateTimePicker({ label, value, onChange, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [viewDate, setViewDate] = useState(() => new Date());
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '04:00 PM',
    '06:00 PM', '08:00 PM', '10:00 PM'
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calendar math
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    formatAndEmit(newDate, selectedTime);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      formatAndEmit(selectedDate, time);
    }
  };

  const formatAndEmit = (dateObj, timeStr) => {
    if (!dateObj) return;
    const day = dateObj.getDate();
    const monthShort = monthNames[dateObj.getMonth()].substring(0, 3);
    const yr = dateObj.getFullYear();
    const formattedStr = `${day} ${monthShort} ${yr}, ${timeStr}`;
    onChange(formattedStr);
  };

  const isSelectedDay = (day) => {
    return (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  return (
    <div className={`relative w-full ${isOpen ? 'z-50' : 'z-10'}`} ref={containerRef}>
      <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1.5">
        {icon}
        <span>{label}</span>
      </label>

      {/* TRIGGER DISPLAY INPUT */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-slate-800 text-sm flex items-center justify-between text-left transition duration-200 ${
          isOpen
            ? 'border-red-500 ring-2 ring-red-500/20 bg-white shadow-md'
            : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <span className={value ? 'font-semibold text-slate-900' : 'text-slate-400 font-normal'}>
          {value || 'Select date & time'}
        </span>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-red-500' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* RESPONSIVE FLOATING POPOVER / MODAL OVERLAY */}
      {isOpen && (
        <>
          {/* Mobile Overlay Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Popover Card (Centered Modal on Mobile, Floating Dropdown on Desktop) */}
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 sm:translate-y-0 sm:static sm:absolute sm:top-full sm:left-0 sm:inset-x-auto sm:mt-2 w-auto sm:w-[320px] max-w-[340px] mx-auto sm:mx-0 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-fade-in-scale max-h-[85vh] overflow-y-auto">
            
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <h4 className="font-serif font-bold text-slate-900 text-base">
                {monthNames[month]} <span className="text-slate-500 text-sm font-normal">{year}</span>
              </h4>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold transition"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold transition"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {daysOfWeek.map((d, i) => (
                <span key={i} className="text-[11px] font-bold text-slate-400 uppercase">
                  {d}
                </span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center mb-4">
              {/* Empty slots before first day */}
              {[...Array(firstDayIndex)].map((_, i) => (
                <div key={`empty-${i}`} className="w-8 h-8" />
              ))}

              {/* Days in Month */}
              {[...Array(daysInMonth)].map((_, i) => {
                const dayNum = i + 1;
                const selected = isSelectedDay(dayNum);
                const today = isToday(dayNum);

                return (
                  <button
                    key={dayNum}
                    type="button"
                    onClick={() => handleDateSelect(dayNum)}
                    className={`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center mx-auto transition duration-150 ${
                      selected
                        ? 'bg-red-500 text-white font-bold shadow-md shadow-red-500/30 scale-105'
                        : today
                        ? 'border border-red-400 text-red-600 font-bold bg-red-50'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>

            {/* Time Selector Section */}
            <div className="border-t border-slate-100 pt-3">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Select Time
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {timeSlots.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTimeSelect(t)}
                    className={`py-1.5 px-1 rounded-lg text-[11px] font-semibold text-center transition ${
                      selectedTime === t
                        ? 'bg-red-500 text-white font-bold shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl transition shadow-md"
            >
              Confirm Date & Time
            </button>

          </div>
        </>
      )}
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';

export default function CustomDateTimePicker({ label, value, onChange, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Select Date, Step 2: Select Time

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

  // Calendar math
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const handleOpen = () => {
    setStep(1);
    setIsOpen(true);
  };

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month + 1, 1));
  };

  // STEP 1: Date Selected -> Auto Advance to Step 2 (Time Selection)
  const handleDateSelect = (day) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    setStep(2); // Automatically show time slots
  };

  // STEP 2: Time Selected -> Auto Save & Close
  const handleTimeSelect = (timeStr) => {
    setSelectedTime(timeStr);
    const dateObj = selectedDate || new Date(year, month, 1);
    
    const day = dateObj.getDate();
    const monthShort = monthNames[dateObj.getMonth()].substring(0, 3);
    const yr = dateObj.getFullYear();
    const formattedResult = `${day} ${monthShort} ${yr}, ${timeStr}`;
    
    onChange(formattedResult);
    setIsOpen(false); // Automatically close modal
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
    <div className="w-full">
      <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1.5">
        {icon}
        <span>{label}</span>
      </label>

      {/* TRIGGER DISPLAY BUTTON */}
      <button
        type="button"
        onClick={handleOpen}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 text-xs sm:text-sm flex items-center justify-between text-left transition duration-200 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
      >
        <span className={value ? 'font-semibold text-slate-900' : 'text-slate-400 font-normal'}>
          {value || 'Select date & time'}
        </span>
        <svg
          className="w-4 h-4 text-slate-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {/* 2-STEP POPUP MODAL (STEP 1: DATE -> STEP 2: TIME -> AUTO CLOSE) */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Centered Compact Card */}
          <div className="relative z-10 w-full max-w-[310px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 animate-fade-in-scale">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                {step === 1 ? 'Step 1 of 2: Select Date' : 'Step 2 of 2: Select Time'}
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs transition"
              >
                ✕
              </button>
            </div>

            {/* STEP 1: DATE SELECTION CALENDAR */}
            {step === 1 && (
              <div>
                {/* Calendar Month Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <h4 className="font-extrabold text-slate-900 text-base">
                    {monthNames[month]} <span className="text-slate-400 text-xs font-semibold">{year}</span>
                  </h4>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold transition"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold transition"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {daysOfWeek.map((d, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-400 uppercase">
                      {d}
                    </span>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {[...Array(firstDayIndex)].map((_, i) => (
                    <div key={`empty-${i}`} className="w-8 h-8" />
                  ))}

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

                <p className="text-[10px] text-slate-400 text-center font-medium mt-3">
                  Click any date to proceed to time selection →
                </p>
              </div>
            )}

            {/* STEP 2: TIME SLOTS SELECTION */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between mb-3 bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Selected Date</p>
                    <p className="text-xs font-extrabold text-slate-900">
                      {selectedDate ? `${selectedDate.getDate()} ${monthNames[selectedDate.getMonth()].substring(0,3)} ${selectedDate.getFullYear()}` : ''}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[11px] font-bold text-red-500 hover:text-red-600 transition"
                  >
                    ‹ Change Date
                  </button>
                </div>

                <p className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Select Time Slot:
                </p>

                <div className="grid grid-cols-3 gap-1.5 mb-2">
                  {timeSlots.map((t, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTimeSelect(t)}
                      className={`py-2 px-1 rounded-xl text-xs font-semibold text-center transition ${
                        selectedTime === t
                          ? 'bg-red-500 text-white font-bold shadow-md shadow-red-500/25 scale-105'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <p className="text-[10px] text-slate-400 text-center font-medium mt-2">
                  Selecting a time slot auto-fills date & time!
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

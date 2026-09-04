import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { PGListing, RoomType } from '../../types';
import { useApp } from '../../context/AppContext';
import { Calendar, Clock, MapPin, CheckCircle2, Shield, User, Phone, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  pg: PGListing;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, pg }) => {
  const { currentUser, addBooking } = useApp();

  const [fullName, setFullName] = useState(currentUser?.fullName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');

  // Default to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [visitDate, setVisitDate] = useState(defaultDateStr);
  const [visitTime, setVisitTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType>(pg.roomType[0]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = 'Please enter your full name';
    if (!email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) {
      err.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(phone.trim())) {
      err.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!visitDate) {
      err.visitDate = 'Please select a visit date';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addBooking({
      pgId: pg.id,
      pgName: pg.name,
      fullName,
      email,
      phone,
      visitDate,
      visitTime,
      roomType: selectedRoomType,
      notes: notes.trim() ? notes : undefined
    });

    const bookingRef = 'PGF-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingId(bookingRef);
  };

  const handleDone = () => {
    setConfirmedBookingId(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleDone}
      title={confirmedBookingId ? 'Visit Scheduled!' : 'Book a Free PG Tour & Visit'}
      subtitle={confirmedBookingId ? undefined : `Schedule an in-person walkthrough at ${pg.name}`}
      maxWidth="lg"
    >
      {confirmedBookingId ? (
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Pass ID: {confirmedBookingId}
            </span>
            <h4 className="text-xl font-extrabold text-slate-900 mt-2">
              Visit Confirmed at {pg.name}!
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Our property caretaker has been informed. Please carry an ID proof when visiting.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2.5 max-w-md mx-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Scheduled Date:</span>
              <span className="font-bold text-slate-900">{visitDate}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Time Window:</span>
              <span className="font-bold text-slate-900">{visitTime}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Room Preference:</span>
              <span className="font-bold text-blue-600">{selectedRoomType}</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-slate-500">Property Address:</span>
              <span className="font-bold text-slate-900 text-right max-w-xs">{pg.location}, {pg.city}</span>
            </div>
          </div>

          <button
            onClick={handleDone}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md shadow-blue-600/20"
          >
            Close & Return
          </button>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit} className="space-y-4">
          <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-blue-950">{pg.name}</p>
              <p className="text-[11px] text-blue-700">{pg.location}, {pg.city}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-blue-900">₹{pg.rent.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-blue-600 block">/ month starting</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className={`w-full px-3 py-2 text-sm rounded-xl border ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile number"
                className={`w-full px-3 py-2 text-sm rounded-xl border ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`w-full px-3 py-2 text-sm rounded-xl border ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                value={visitDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setVisitDate(e.target.value)}
                className={`w-full px-3 py-2 text-sm rounded-xl border ${
                  errors.visitDate ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.visitDate && <p className="text-[11px] text-rose-500 mt-1">{errors.visitDate}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Time Slot
              </label>
              <select
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white"
              >
                <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Interested Room Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {pg.roomType.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSelectedRoomType(type)}
                  className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                    selectedRoomType === type
                      ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Any Special Questions (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Vegetarian food availability, bike parking slot"
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-800 text-[11px] flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Free Tour. No booking fee or obligation to rent.</span>
          </div>

          <button
            type="submit"
            id="confirm-booking-btn"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all"
          >
            Confirm Free Visit
          </button>
        </form>
      )}
    </Modal>
  );
};

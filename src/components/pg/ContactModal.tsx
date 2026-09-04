import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { PGListing } from '../../types';
import { useApp } from '../../context/AppContext';
import { Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  pg: PGListing;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, pg }) => {
  const { currentUser, showToast } = useApp();

  const [fullName, setFullName] = useState(currentUser?.fullName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [message, setMessage] = useState(
    `Hi ${pg.owner.name}, I found ${pg.name} on PG Finder and I'd like to know more about room availability and deposit terms.`
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = 'Full name is required';
    if (!email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) {
      err.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(phone.trim())) {
      err.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!message.trim()) err.message = 'Please enter your message or query';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    showToast(`Inquiry sent to ${pg.owner.name}! They will call you shortly.`, 'success');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? 'Inquiry Sent Successfully' : `Contact Property Manager`}
      subtitle={submitted ? undefined : `Inquire directly about ${pg.name}`}
      maxWidth="md"
    >
      {submitted ? (
        <div className="text-center py-4 space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900">Message Delivered!</h4>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              We have forwarded your contact details and message to <strong>{pg.owner.name}</strong>.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
            <p className="font-semibold text-slate-800">Owner Direct Coordinates:</p>
            <p className="flex items-center gap-2 text-slate-600">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{pg.owner.phone}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{pg.owner.email}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Average response time: {pg.owner.responseRate}</span>
            </p>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Quick PG Header in Modal */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <img
              src={pg.image}
              alt={pg.name}
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="text-left flex-1 min-w-0">
              <h4 className="text-xs font-bold text-slate-900 truncate">{pg.name}</h4>
              <p className="text-[11px] text-slate-500 truncate">{pg.location}, {pg.city}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-extrabold text-blue-600">
                  ₹{pg.rent.toLocaleString('en-IN')}/mo
                </span>
                <span className="text-[10px] text-slate-400">• {pg.gender} PG</span>
              </div>
            </div>
          </div>

          {/* Owner info banner */}
          <div className="flex items-center justify-between text-xs px-3 py-2 bg-blue-50/60 rounded-lg text-blue-900 border border-blue-100/80">
            <span className="font-semibold">Manager: {pg.owner.name}</span>
            <span className="text-blue-600 text-[11px] font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> Responds {pg.owner.responseRate}
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rahul@example.com"
                className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
              {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Zero Brokerage: Your information is protected & shared only with verified owners.</span>
          </div>

          <button
            type="submit"
            id="submit-contact-inquiry-btn"
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Send Direct Inquiry</span>
          </button>
        </form>
      )}
    </Modal>
  );
};

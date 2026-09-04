import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Building,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = 'Your name is required';
    if (!email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = 'Please enter a valid email format';
    }
    if (!phone.trim()) {
      err.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(phone.trim())) {
      err.phone = 'Please enter a valid phone number';
    }
    if (!message.trim()) {
      err.message = 'Please provide details about your inquiry';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    showToast('Your message has been received! Our support team will get back within 4 hours.', 'success');
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          We’re Here to Help
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
          Contact PG Finder Support
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Have a question about a PG listing, visit scheduling, or onboarding your property?
          Reach out to our resident support desks.
        </p>
      </div>

      {/* Main Grid: Left Form + Right Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for contacting us, <strong>{name}</strong>. A support executive has been
                assigned to your query and will reply via email or phone within 4 business hours.
              </p>
              <button
                onClick={handleResetForm}
                className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Send Us a Direct Message</h2>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
                {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Topic</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="General Inquiry">General Accommodation Inquiry</option>
                  <option value="Booking Visit Assistance">Help with Booking a PG Visit</option>
                  <option value="Listing Property">I want to list my PG / Hostel</option>
                  <option value="Report Listing">Report an incorrect listing or rate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you need help with..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                    errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & City Offices (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Offices */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900">Regional Support Centers</h3>

            {/* Chennai HQ */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 uppercase">Chennai (Headquarters)</span>
              </div>
              <p className="text-xs text-slate-600">
                Tower B, Guindy IT Park, Anna Salai, Chennai - 600032
              </p>
              <p className="text-xs text-slate-600 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>+91 (044) 4920-8800</span>
              </p>
            </div>

            {/* Bangalore Hub */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 uppercase">Bangalore Branch</span>
              </div>
              <p className="text-xs text-slate-600">
                80ft Road, 4th Block Koramangala, Bengaluru - 560034
              </p>
              <p className="text-xs text-slate-600 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>+91 (080) 3921-4400</span>
              </p>
            </div>

            {/* Timings & Email */}
            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Email Support: <strong>support@pgfinder.in</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Operational Hours: Monday - Saturday (8:00 AM to 9:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ summary */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-6 space-y-3">
            <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Frequently Asked Questions</span>
            </h4>
            <div className="space-y-2 text-xs text-blue-900">
              <p className="font-semibold">Do I have to pay any brokerage to PG Finder?</p>
              <p className="text-[11px] text-slate-600">
                Never. All listings and visit bookings are completely free.
              </p>
            </div>
            <div className="space-y-1 text-xs text-blue-900 pt-2 border-t border-blue-100">
              <p className="font-semibold">What happens after I schedule a visit?</p>
              <p className="text-[11px] text-slate-600">
                The PG manager receives your confirmation pass and will meet you directly at the property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

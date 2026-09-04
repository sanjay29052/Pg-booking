import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Heart, ShieldCheck, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { updateFilters } = useApp();
  const navigate = useNavigate();

  const handleCityClick = (city: string) => {
    updateFilters({ city });
    navigate('/find-pg');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-900">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                PG<span className="text-blue-400">Finder</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              India’s trusted frontend accommodation discovery portal for students and working
              professionals. Find verified paying guest hostels with zero brokerage and transparent
              pricing.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> 100% Verified PGs
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-blue-400">
                <Clock className="w-4 h-4" /> Instant Visit Booking
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/find-pg" className="text-slate-400 hover:text-white transition-colors">
                  Find Accommodations
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-slate-400 hover:text-white transition-colors">
                  Saved Favorites
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Locations */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Popular Cities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Chennai', 'Bangalore', 'Coimbatore', 'Madurai', 'Hyderabad'].map((city) => (
                <li key={city}>
                  <button
                    onClick={() => handleCityClick(city)}
                    className="text-slate-400 hover:text-blue-300 transition-colors text-left"
                  >
                    PGs in {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Anna Salai, Guindy, Chennai, Tamil Nadu - 600032</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91 (044) 4920-8800</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@pgfinder.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PG Finder Inc. All rights reserved. Made for students & professionals.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

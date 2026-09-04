import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { ShieldCheck, Sparkles, Key, Users } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Hero: React.FC = () => {
  const { updateFilters } = useApp();
  const navigate = useNavigate();

  const handleQuickLocality = (city: string, search: string) => {
    updateFilters({ city, searchTerm: search });
    navigate('/find-pg');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-16 sm:py-24 border-b border-slate-200/60">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs border border-blue-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Zero Brokerage • Verified Accommodations</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
          Find Your <span className="text-blue-600">Perfect PG</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Discover verified paying guest hostels, luxury co-living suites, and student homes
          across South India’s top tech & educational hubs.
        </p>

        {/* Search Bar */}
        <SearchBar variant="hero" />

        {/* Quick searches */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Popular searches:</span>
          {[
            { city: 'Chennai', search: 'OMR' },
            { city: 'Bangalore', search: 'Koramangala' },
            { city: 'Hyderabad', search: 'Gachibowli' },
            { city: 'Coimbatore', search: 'Peelamedu' },
            { city: 'Madurai', search: 'KK Nagar' }
          ].map((item) => (
            <button
              key={`${item.city}-${item.search}`}
              onClick={() => handleQuickLocality(item.city, item.search)}
              className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all font-medium shadow-xs"
            >
              {item.search} ({item.city})
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">100% Verified</p>
              <p className="text-[11px] text-slate-500">Physical audits by team</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Zero Brokerage</p>
              <p className="text-[11px] text-slate-500">Direct owner pricing</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">15,000+ Residents</p>
              <p className="text-[11px] text-slate-500">Students & IT pros</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Free Visit Booking</p>
              <p className="text-[11px] text-slate-500">Tour before you decide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

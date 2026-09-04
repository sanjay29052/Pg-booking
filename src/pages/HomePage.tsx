import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { PGCard } from '../components/pg/PGCard';
import { ContactModal } from '../components/pg/ContactModal';
import { BookingModal } from '../components/pg/BookingModal';
import { POPULAR_CITIES } from '../data/pgData';
import { useApp } from '../context/AppContext';
import { PGListing } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  Building,
  HeartHandshake,
  Utensils,
  Wifi,
  Sparkles,
  ArrowRight,
  MapPin,
  Star,
  Users
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { pgs, updateFilters } = useApp();
  const navigate = useNavigate();

  const [selectedPGForContact, setSelectedPGForContact] = useState<PGListing | null>(null);
  const [selectedPGForBooking, setSelectedPGForBooking] = useState<PGListing | null>(null);

  const featuredPGs = pgs.filter((p) => p.featured).slice(0, 6);

  const handleCitySelect = (cityName: string) => {
    updateFilters({ city: cityName, searchTerm: '' });
    navigate('/find-pg');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Popular Locations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              Top Student & IT Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Explore Popular Cities
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Find verified hostels and paying guest suites near top colleges and tech parks.
            </p>
          </div>
          <Link
            to="/find-pg"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>View All Accommodations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {POPULAR_CITIES.map((city) => (
            <div
              key={city.name}
              id={`city-card-${city.name.toLowerCase()}`}
              onClick={() => handleCitySelect(city.name)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-slate-900 border border-slate-200"
            >
              <div className="h-44 sm:h-56 w-full overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-90"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded mb-1 shadow-xs">
                  {city.count}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold">{city.name}</h3>
                <p className="text-[11px] text-slate-300 line-clamp-1">{city.popularHubs.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured PG Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
              Handpicked Residences
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Featured PG Accommodations
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Top rated by students and working professionals with audited amenities.
            </p>
          </div>
          <Link
            to="/find-pg"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>Explore All {pgs.length} PGs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPGs.map((pg) => (
            <PGCard
              key={pg.id}
              pg={pg}
              onContactClick={(item) => setSelectedPGForContact(item)}
              onBookVisitClick={(item) => setSelectedPGForBooking(item)}
            />
          ))}
        </div>
      </section>

      {/* 4. Why Choose PG Finder Section */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Safe • Simple • Affordable
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3">
              Why Choose PG Finder?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Say goodbye to shady brokers, hidden security deductions, and misleading photos. We
              provide complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/10 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">100% Verified Properties</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every PG listed on our portal undergoes physical hygiene checks, security audits, and
                owner background verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/10 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Zero Brokerage Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You never pay a single rupee in broker commissions. Directly contact owners and
                enjoy authentic rental rates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/10 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-sm">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Home-Style Food & Wi-Fi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enjoy 3 nutritious meals daily, high-speed fiber internet for work or online studies,
                and round-the-clock power backup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/10 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-4 shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Instant Visit Scheduling</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Book free physical walkthroughs in 30 seconds. Inspect the rooms, meet the caretakers,
                and move in with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            4 Easy Steps
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            How PG Finder Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center mx-auto mb-4 border border-blue-200">
              1
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Search & Filter</h4>
            <p className="text-xs text-slate-500">
              Filter by budget, preferred room sharing, gender, AC, and amenities in your target city.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center mx-auto mb-4 border border-blue-200">
              2
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Compare Options</h4>
            <p className="text-xs text-slate-500">
              Review genuine photos, verified house rules, food policies, and reviews from real residents.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center mx-auto mb-4 border border-blue-200">
              3
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Book Free Visit</h4>
            <p className="text-xs text-slate-500">
              Pick a date and convenient time slot to inspect the room without any upfront commitment.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center mx-auto mb-4 border border-blue-200">
              4
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Move In Hassle-Free</h4>
            <p className="text-xs text-slate-500">
              Finalize agreement directly with property manager and unpack your bags in your new home!
            </p>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to find your second home?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mt-2">
              Browse over 1,500+ verified beds across Chennai, Bangalore, Hyderabad, Coimbatore, and
              Madurai today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/find-pg"
              className="px-6 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-md transition-all text-sm text-center"
            >
              Start Searching Now
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-slate-900/50 hover:bg-slate-900/80 border border-white/20 text-white font-bold rounded-xl transition-all text-sm text-center"
            >
              Need Guidance?
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedPGForContact && (
        <ContactModal
          isOpen={!!selectedPGForContact}
          onClose={() => setSelectedPGForContact(null)}
          pg={selectedPGForContact}
        />
      )}

      {selectedPGForBooking && (
        <BookingModal
          isOpen={!!selectedPGForBooking}
          onClose={() => setSelectedPGForBooking(null)}
          pg={selectedPGForBooking}
        />
      )}
    </div>
  );
};

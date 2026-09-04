import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PGCard } from '../components/pg/PGCard';
import { ContactModal } from '../components/pg/ContactModal';
import { BookingModal } from '../components/pg/BookingModal';
import { Heart, Trash2, ArrowRight, Compass } from 'lucide-react';
import { PGListing } from '../types';

export const FavoritesPage: React.FC = () => {
  const { pgs, favorites, toggleFavorite } = useApp();
  const [selectedPGForContact, setSelectedPGForContact] = useState<PGListing | null>(null);
  const [selectedPGForBooking, setSelectedPGForBooking] = useState<PGListing | null>(null);

  const favoritedPGs = pgs.filter((p) => favorites.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 min-h-[70vh]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Saved Favorites
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            You have saved <strong className="text-slate-800">{favoritedPGs.length}</strong> PG
            accommodations to compare and revisit.
          </p>
        </div>

        {favoritedPGs.length > 0 && (
          <Link
            to="/find-pg"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            <span>Explore More PGs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Content */}
      {favoritedPGs.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">No Saved PGs Yet</h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            Click the heart icon on any PG card to bookmark accommodations for quick comparison.
          </p>
          <Link
            to="/find-pg"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Discover Paying Guests Now</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritedPGs.map((pg) => (
            <div key={pg.id} className="relative group">
              <PGCard
                pg={pg}
                onContactClick={(item) => setSelectedPGForContact(item)}
                onBookVisitClick={(item) => setSelectedPGForBooking(item)}
              />
            </div>
          ))}
        </div>
      )}

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

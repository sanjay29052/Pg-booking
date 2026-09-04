import React, { useState } from 'react';
import { PGListing } from '../../types';
import { PGCard } from './PGCard';
import { ContactModal } from './ContactModal';
import { BookingModal } from './BookingModal';
import { Home, Sparkles, FilterX } from 'lucide-react';

interface PGGridProps {
  pgs: PGListing[];
  emptyMessage?: string;
  onResetFilters?: () => void;
}

export const PGGrid: React.FC<PGGridProps> = ({
  pgs,
  emptyMessage = 'No paying guest accommodations found matching your criteria.',
  onResetFilters
}) => {
  const [selectedPGForContact, setSelectedPGForContact] = useState<PGListing | null>(null);
  const [selectedPGForBooking, setSelectedPGForBooking] = useState<PGListing | null>(null);

  if (pgs.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-6">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FilterX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">No Accommodations Found</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">{emptyMessage}</p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {pgs.map((pg) => (
          <PGCard
            key={pg.id}
            pg={pg}
            onContactClick={(item) => setSelectedPGForContact(item)}
            onBookVisitClick={(item) => setSelectedPGForBooking(item)}
          />
        ))}
      </div>

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
    </>
  );
};

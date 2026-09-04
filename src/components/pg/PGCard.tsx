import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Eye, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { PGListing } from '../../types';
import { useApp } from '../../context/AppContext';

interface PGCardProps {
  pg: PGListing;
  onContactClick?: (pg: PGListing) => void;
  onBookVisitClick?: (pg: PGListing) => void;
}

export const PGCard: React.FC<PGCardProps> = ({
  pg,
  onContactClick,
  onBookVisitClick
}) => {
  const { isFavorite, toggleFavorite } = useApp();
  const favorited = isFavorite(pg.id);

  const getGenderBadge = (gender: string) => {
    switch (gender) {
      case 'Male':
        return (
          <span className="px-2 py-0.5 bg-emerald-50 text-[10px] font-medium text-emerald-700 rounded border border-emerald-200/60">
            Male only
          </span>
        );
      case 'Female':
        return (
          <span className="px-2 py-0.5 bg-pink-50 text-[10px] font-medium text-pink-700 rounded border border-pink-200/60">
            Female only
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 bg-blue-50 text-[10px] font-medium text-blue-700 rounded border border-blue-200/60">
            Unisex / Any
          </span>
        );
    }
  };

  return (
    <div
      id={`pg-card-${pg.id}`}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      {/* Image Media Area with Sleek Overlay */}
      <div className="relative h-44 bg-slate-200 overflow-hidden">
        <img
          src={pg.image}
          alt={pg.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay with Sleek Rent & Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-between p-3.5">
          {/* Top Row: Tags & Heart */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {pg.featured && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit tracking-wide shadow-xs">
                  FEATURED
                </span>
              )}
              {pg.verified && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-600/90 text-white backdrop-blur-xs">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </span>
              )}
            </div>

            {/* Favorite Heart Button */}
            <button
              id={`favorite-btn-${pg.id}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(pg.id);
              }}
              className={`w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm cursor-pointer transition-transform active:scale-90 ${
                favorited
                  ? 'bg-rose-500 text-white shadow-rose-500/30'
                  : 'text-slate-600 hover:text-rose-500 hover:bg-white'
              }`}
              aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>

          {/* Bottom Row inside Image: Rent & Star Rating */}
          <div className="flex justify-between items-end text-white">
            <div>
              <span className="text-lg font-bold">
                ₹{pg.rent.toLocaleString('en-IN')}
                <span className="text-xs font-normal opacity-80">/mo</span>
              </span>
              {pg.originalRent && (
                <span className="text-[11px] opacity-70 line-through block -mt-0.5">
                  ₹{pg.originalRent.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="flex items-center text-xs bg-black/45 backdrop-blur-sm px-2 py-1 rounded font-semibold text-white">
              <span className="text-yellow-400 mr-1">★</span> {pg.rating.toFixed(1)}
              <span className="text-[10px] opacity-75 ml-1">({pg.reviews})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <Link to={`/pg/${pg.id}`} className="block">
            <h4 className="font-bold text-slate-800 text-base mb-1 truncate hover:text-blue-600 transition-colors">
              {pg.name}
            </h4>
          </Link>

          {/* Location */}
          <p className="text-xs text-slate-500 flex items-center gap-1 mb-3 truncate">
            <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{pg.location}, {pg.city}</span>
          </p>

          {/* Sleek Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-medium text-slate-600 rounded">
              {pg.roomType[0] || 'Single Share'}
            </span>
            {pg.facilities.slice(0, 2).map((f) => (
              <span
                key={f}
                className="px-2 py-0.5 bg-slate-100 text-[10px] font-medium text-slate-600 rounded"
              >
                {f}
              </span>
            ))}
            {getGenderBadge(pg.gender)}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-slate-100">
          <Link
            to={`/pg/${pg.id}`}
            id={`view-details-${pg.id}`}
            className="flex-1 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors text-center flex items-center justify-center gap-1"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>Details</span>
          </Link>

          <button
            onClick={() => onContactClick ? onContactClick(pg) : null}
            id={`contact-owner-${pg.id}`}
            className="flex-1 py-2 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ContactModal } from '../components/pg/ContactModal';
import { BookingModal } from '../components/pg/BookingModal';
import { Rating } from '../components/common/Rating';
import { FacilityBadge } from '../components/common/FacilityBadge';
import {
  MapPin,
  Heart,
  PhoneCall,
  Calendar,
  ShieldCheck,
  ChevronLeft,
  Share2,
  CheckCircle2,
  Building2,
  Clock,
  Car,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  Sparkles,
  Info
} from 'lucide-react';

export const PGDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pgs, isFavorite, toggleFavorite, showToast } = useApp();
  const navigate = useNavigate();

  const pg = pgs.find((p) => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!pg) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">PG Accommodation Not Found</h2>
        <p className="text-slate-500 mb-6">
          The property you are looking for may have been delisted or does not exist.
        </p>
        <Link
          to="/find-pg"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Browse Available PGs</span>
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(pg.id);
  const images = pg.gallery && pg.gallery.length > 0 ? pg.gallery : [pg.image];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Page link copied to clipboard!', 'info');
    } else {
      showToast(`PG: ${pg.name}`, 'info');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Search</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            title="Share PG"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleFavorite(pg.id)}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
              favorited
                ? 'bg-rose-50 border-rose-200 text-rose-600 shadow-xs'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{favorited ? 'Saved in Favorites' : 'Save to Favorites'}</span>
          </button>
        </div>
      </div>

      {/* Main Header Info */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                pg.gender === 'Female'
                  ? 'bg-pink-100 text-pink-700'
                  : pg.gender === 'Male'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-emerald-100 text-emerald-700'
              }`}
            >
              {pg.gender === 'Any' ? 'Unisex / Any' : `${pg.gender} PG`}
            </span>
            {pg.verified && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified
              </span>
            )}
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
              {pg.city}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {pg.name}
          </h1>

          <div className="flex items-center gap-4 mt-2 text-xs sm:text-sm text-slate-500 flex-wrap">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <MapPin className="w-4 h-4 text-blue-600" />
              {pg.location}, {pg.area}, {pg.city}
            </span>
            <span>•</span>
            <Rating rating={pg.rating} reviews={pg.reviews} />
          </div>
        </div>

        {/* Pricing Card Header */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 text-left md:text-right shrink-0">
          <span className="text-xs text-slate-500 block">Monthly Rent starts from</span>
          <div className="flex items-baseline md:justify-end gap-1.5 mt-0.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ₹{pg.rent.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-slate-500 font-medium">/ month</span>
          </div>
          {pg.originalRent && (
            <span className="text-xs text-slate-400 line-through block mt-0.5">
              Original: ₹{pg.originalRent.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>

      {/* Image Gallery */}
      <section className="space-y-3">
        {/* Active Large Image */}
        <div className="relative h-[320px] sm:h-[460px] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
          <img
            src={images[activeImageIndex]}
            alt={`${pg.name} view ${activeImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
            Photo {activeImageIndex + 1} of {images.length}
          </div>
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx
                    ? 'border-blue-600 ring-2 ring-blue-500/30 scale-105'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content Layout: 8 cols Details + 4 cols Sticky Booking/Contact Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 cols: Description, Room types, Facilities, Rules, Nearby, Reviews */}
        <div className="lg:col-span-8 space-y-8">
          {/* Description */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-3">About the PG Accommodation</h2>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {pg.description}
            </p>
          </section>

          {/* Available Room Types & Pricing Breakdown */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Room Options & Pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pg.roomOptions && pg.roomOptions.length > 0 ? (
                pg.roomOptions.map((option) => (
                  <div
                    key={option.type}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 transition-all shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">{option.type}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                        Available
                      </span>
                    </div>
                    <div className="text-xl font-extrabold text-blue-600">
                      ₹{option.rent.toLocaleString('en-IN')}
                      <span className="text-xs text-slate-500 font-normal"> / mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-200">
                      Security Deposit: ₹{option.deposit.toLocaleString('en-IN')}
                    </div>
                  </div>
                ))
              ) : (
                pg.roomType.map((type) => (
                  <div
                    key={type}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60"
                  >
                    <span className="text-xs font-bold text-slate-900 block mb-1">{type}</span>
                    <span className="text-sm font-extrabold text-blue-600">
                      ₹{pg.rent.toLocaleString('en-IN')}+
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Facilities / Amenities */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Facilities & Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {pg.facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 bg-slate-50/80 text-xs font-semibold text-slate-700"
                >
                  <FacilityBadge facility={facility} size="sm" variant="subtle" />
                </div>
              ))}
            </div>
          </section>

          {/* House Rules */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              <span>House Policies & Rules</span>
            </h2>
            <ul className="space-y-2.5">
              {pg.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nearby Places */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Nearby Tech Parks, Colleges & Transit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pg.nearbyPlaces.map((place, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50 text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{place.name}</span>
                  </div>
                  <span className="font-bold text-blue-600 shrink-0 ml-2 bg-blue-50 px-2 py-0.5 rounded">
                    {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews List */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Resident Reviews & Ratings</h2>
              <Rating rating={pg.rating} reviews={pg.reviews} />
            </div>

            <div className="space-y-3">
              {pg.reviewsList && pg.reviewsList.length > 0 ? (
                pg.reviewsList.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{rev.userName}</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                          {rev.userType}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500">No written reviews yet.</p>
              )}
            </div>
          </section>
        </div>

        {/* Right 4 cols: Sticky Contact & Booking Card */}
        <div className="lg:col-span-4 sticky top-24 space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md space-y-5">
            <div>
              <span className="text-xs text-slate-400 font-medium block">Starting monthly tariff</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-slate-900">
                  ₹{pg.rent.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>
              <span className="inline-block mt-1 text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                0% Brokerage Guarantee
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3">
              <button
                id="details-book-visit-btn"
                onClick={() => setBookingModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Visit</span>
              </button>

              <button
                id="details-contact-owner-btn"
                onClick={() => setContactModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-colors border border-slate-200"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Contact Property Manager</span>
              </button>
            </div>

            {/* Owner Details Card */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-2">
              <p className="font-bold text-slate-900">Listed By Verified Partner:</p>
              <p className="text-slate-700 font-medium">{pg.owner.name}</p>
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Responds within {pg.owner.responseRate}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct communication with caretaker</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent security deposit terms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free visit cancellation at any time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        pg={pg}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        pg={pg}
      />
    </div>
  );
};

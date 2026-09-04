import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { FilterState, GenderPreference, RoomType } from '../../types';
import { ALL_FACILITIES } from '../../data/pgData';
import { RotateCcw, Check, SlidersHorizontal, MapPin, IndianRupee, Users, Home, Sparkles } from 'lucide-react';

interface FilterSidebarProps {
  onCloseMobile?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ onCloseMobile }) => {
  const { filters, setFilters, resetFilters } = useApp();

  // Local draft state for filters
  const [draft, setDraft] = useState<FilterState>(filters);

  // Sync draft whenever global filters change (e.g. from Hero search or city clicks)
  useEffect(() => {
    setDraft(filters);
  }, [filters]);

  const handleGenderChange = (gender: GenderPreference) => {
    setDraft((prev) => ({ ...prev, gender }));
  };

  const handleRoomTypeToggle = (type: RoomType) => {
    setDraft((prev) => {
      const exists = prev.roomTypes.includes(type);
      return {
        ...prev,
        roomTypes: exists ? prev.roomTypes.filter((t) => t !== type) : [...prev.roomTypes, type]
      };
    });
  };

  const handleFacilityToggle = (facility: string) => {
    setDraft((prev) => {
      const exists = prev.facilities.includes(facility);
      return {
        ...prev,
        facilities: exists ? prev.facilities.filter((f) => f !== facility) : [...prev.facilities, facility]
      };
    });
  };

  const applyFilters = () => {
    setFilters(draft);
    if (onCloseMobile) onCloseMobile();
  };

  const handleReset = () => {
    resetFilters();
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Filters</h3>
        </div>
        <button
          onClick={handleReset}
          id="clear-filters-btn"
          className="text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear All</span>
        </button>
      </div>

      {/* 1. Location / City Filter */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-blue-500" />
          <span>Location & City</span>
        </label>
        <select
          id="filter-city-select"
          value={draft.city}
          onChange={(e) => setDraft((prev) => ({ ...prev, city: e.target.value }))}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="">All Cities</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Madurai">Madurai</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
        <input
          type="text"
          placeholder="Filter by locality or area..."
          value={draft.searchTerm}
          onChange={(e) => setDraft((prev) => ({ ...prev, searchTerm: e.target.value }))}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* 2. Rent Range Filter */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-blue-500" />
            <span>Monthly Rent</span>
          </span>
          <span className="text-blue-600 font-extrabold text-xs">
            ₹{draft.minRent.toLocaleString()} - ₹{draft.maxRent.toLocaleString()}
          </span>
        </label>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span>₹4,000</span>
            <span>Max: ₹{draft.maxRent.toLocaleString()}</span>
            <span>₹25,000</span>
          </div>
          <input
            type="range"
            min="4000"
            max="25000"
            step="500"
            value={draft.maxRent}
            onChange={(e) => setDraft((prev) => ({ ...prev, maxRent: Number(e.target.value) }))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-[10px] text-slate-400 block mb-0.5">Min Rent</span>
            <input
              type="number"
              value={draft.minRent}
              step="500"
              min="3000"
              max={draft.maxRent - 500}
              onChange={(e) => setDraft((prev) => ({ ...prev, minRent: Number(e.target.value) }))}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
            />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block mb-0.5">Max Rent</span>
            <input
              type="number"
              value={draft.maxRent}
              step="500"
              min={draft.minRent + 500}
              max="30000"
              onChange={(e) => setDraft((prev) => ({ ...prev, maxRent: Number(e.target.value) }))}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* 3. Gender Filter */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-blue-500" />
          <span>Gender</span>
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(['Male', 'Female', 'Any'] as GenderPreference[]).map((g) => (
            <button
              type="button"
              key={g}
              id={`filter-gender-${g.toLowerCase()}`}
              onClick={() => handleGenderChange(g)}
              className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                draft.gender === g
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {g === 'Any' ? 'Any / Unisex' : g}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Room Type Filter */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
          <Home className="w-3.5 h-3.5 text-blue-500" />
          <span>Room Type</span>
        </label>
        <div className="space-y-1.5">
          {(['Single', 'Double Sharing', 'Triple Sharing'] as RoomType[]).map((type) => {
            const isChecked = draft.roomTypes.includes(type);
            return (
              <label
                key={type}
                className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all text-xs ${
                  isChecked
                    ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-semibold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{type}</span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleRoomTypeToggle(type)}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* 5. Facilities Filter */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Facilities</span>
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {ALL_FACILITIES.map((facility) => {
            const isSelected = draft.facilities.includes(facility);
            return (
              <button
                type="button"
                key={facility}
                id={`filter-facility-${facility.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => handleFacilityToggle(facility)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'border border-slate-300'
                  }`}
                >
                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
                <span className="truncate">{facility}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-slate-100 space-y-2">
        <button
          type="button"
          onClick={applyFilters}
          id="apply-filters-btn"
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm transition-all uppercase tracking-wider"
        >
          Apply Filters
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

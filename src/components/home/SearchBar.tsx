import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { GenderPreference } from '../../types';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
  onSearchComplete?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  variant = 'hero',
  onSearchComplete
}) => {
  const { filters, updateFilters } = useApp();
  const navigate = useNavigate();

  const [localSearch, setLocalSearch] = useState(filters.searchTerm);
  const [localCity, setLocalCity] = useState(filters.city);
  const [localGender, setLocalGender] = useState<GenderPreference>(filters.gender);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({
      searchTerm: localSearch,
      city: localCity,
      gender: localGender
    });
    if (onSearchComplete) {
      onSearchComplete();
    } else {
      navigate('/find-pg');
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSearch} className="flex items-center gap-2 w-full">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by PG name, locality or landmark..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all shadow-xs"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors shrink-0"
        >
          Search
        </button>
      </form>
    );
  }

  return (
    <form
      id="hero-search-form"
      onSubmit={handleSearch}
      className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 max-w-3xl w-full mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 items-center">
        {/* City Selector */}
        <div className="md:col-span-4 relative flex items-center bg-slate-50 hover:bg-slate-100/80 rounded-xl px-3.5 py-2.5 transition-colors border border-slate-200/60">
          <MapPin className="w-5 h-5 text-blue-600 shrink-0 mr-2.5" />
          <div className="flex-1 text-left">
            <label htmlFor="search-city-select" className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              City
            </label>
            <select
              id="search-city-select"
              value={localCity}
              onChange={(e) => setLocalCity(e.target.value)}
              className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="">All Cities</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
        </div>

        {/* Search Query / Landmark */}
        <div className="md:col-span-5 relative flex items-center bg-slate-50 hover:bg-slate-100/80 rounded-xl px-3.5 py-2.5 transition-colors border border-slate-200/60">
          <Search className="w-5 h-5 text-blue-600 shrink-0 mr-2.5" />
          <div className="flex-1 text-left">
            <label htmlFor="search-keyword-input" className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Locality / PG Name
            </label>
            <input
              id="search-keyword-input"
              type="text"
              placeholder="e.g. OMR, Koramangala, Gachibowli..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full bg-transparent text-sm font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-3">
          <button
            type="submit"
            id="search-pg-btn"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all text-sm group"
          >
            <span>Search PG</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </form>
  );
};

import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FilterSidebar } from '../components/pg/FilterSidebar';
import { PGGrid } from '../components/pg/PGGrid';
import { SearchBar } from '../components/home/SearchBar';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles, MapPin } from 'lucide-react';
import { PGListing, FilterState } from '../types';

export const FindPGPage: React.FC = () => {
  const { pgs, filters, updateFilters, resetFilters } = useApp();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Compute filtered and sorted PGs
  const filteredPGs = useMemo(() => {
    return pgs
      .filter((pg) => {
        // 1. Search term (matches name, location, area, city)
        if (filters.searchTerm.trim()) {
          const term = filters.searchTerm.toLowerCase().trim();
          const matches =
            pg.name.toLowerCase().includes(term) ||
            pg.location.toLowerCase().includes(term) ||
            pg.area.toLowerCase().includes(term) ||
            pg.city.toLowerCase().includes(term);
          if (!matches) return false;
        }

        // 2. City
        if (filters.city && pg.city !== filters.city) {
          return false;
        }

        // 3. Rent bounds
        if (pg.rent < filters.minRent || pg.rent > filters.maxRent) {
          return false;
        }

        // 4. Gender
        if (filters.gender !== 'Any') {
          if (pg.gender !== 'Any' && pg.gender !== filters.gender) {
            return false;
          }
        }

        // 5. Room Type
        if (filters.roomTypes.length > 0) {
          const hasMatchingRoom = filters.roomTypes.some((rt) => pg.roomType.includes(rt));
          if (!hasMatchingRoom) return false;
        }

        // 6. Facilities
        if (filters.facilities.length > 0) {
          const hasAllFacilities = filters.facilities.every((f) => pg.facilities.includes(f));
          if (!hasAllFacilities) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'rent-asc') return a.rent - b.rent;
        if (filters.sortBy === 'rent-desc') return b.rent - a.rent;
        if (filters.sortBy === 'rating-desc') return b.rating - a.rating;
        // Default popular / featured first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
  }, [pgs, filters]);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.city) count++;
    if (filters.searchTerm) count++;
    if (filters.gender !== 'Any') count++;
    if (filters.roomTypes.length > 0) count += filters.roomTypes.length;
    if (filters.facilities.length > 0) count += filters.facilities.length;
    if (filters.maxRent < 20000 || filters.minRent > 4000) count++;
    return count;
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Top Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find Your PG Accommodation
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Showing <strong className="text-slate-800">{filteredPGs.length}</strong> verified paying
            guest options {filters.city ? `in ${filters.city}` : 'across all cities'}
          </p>
        </div>

        {/* Search bar inside header */}
        <div className="w-full md:w-80 lg:w-96">
          <SearchBar variant="compact" />
        </div>
      </div>

      {/* Main Layout: Left Sidebar + Right PG Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Filter Sidebar (4 cols) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24">
          <FilterSidebar />
        </aside>

        {/* Right Listings Section (8 cols) */}
        <main className="lg:col-span-8 space-y-6">
          {/* Controls Bar: Mobile filter button, Active pills, Sort selector */}
          <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
            {/* Mobile Filter Toggle */}
            <button
              id="mobile-filter-trigger-btn"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg border border-blue-200 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {/* Quick Active Chips */}
            <div className="flex-1 flex flex-wrap items-center gap-1.5 min-w-[150px]">
              {filters.city && (
                <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs px-2.5 py-1 rounded-lg font-semibold">
                  <MapPin className="w-3 h-3 text-blue-600" />
                  {filters.city}
                  <button
                    onClick={() => updateFilters({ city: '' })}
                    className="hover:text-blue-950 p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {filters.gender !== 'Any' && (
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-semibold">
                  {filters.gender}
                  <button
                    onClick={() => updateFilters({ gender: 'Any' })}
                    className="hover:text-slate-900 p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {filters.roomTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-medium"
                >
                  {type}
                  <button
                    onClick={() =>
                      updateFilters({
                        roomTypes: filters.roomTypes.filter((t) => t !== type)
                      })
                    }
                    className="hover:text-slate-900 p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 py-1 underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-pg-select" className="text-xs font-semibold text-slate-500 whitespace-nowrap hidden sm:inline-block">
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="sort-pg-select"
                  value={filters.sortBy}
                  onChange={(e) =>
                    updateFilters({
                      sortBy: e.target.value as FilterState['sortBy']
                    })
                  }
                  className="appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                >
                  <option value="popular">Recommended / Popular</option>
                  <option value="rent-asc">Rent: Low to High</option>
                  <option value="rent-desc">Rent: High to Low</option>
                  <option value="rating-desc">Rating: Highest First</option>
                </select>
                <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* PG Grid */}
          <PGGrid
            pgs={filteredPGs}
            emptyMessage="No PGs matched your search criteria. Try removing some filters or expanding your budget range."
            onResetFilters={resetFilters}
          />
        </main>
      </div>

      {/* Mobile Drawer Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs lg:hidden animate-in fade-in duration-200">
          <div
            className="w-full max-w-sm bg-white h-full overflow-y-auto p-5 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base">Filter PGs</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar onCloseMobile={() => setMobileFilterOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

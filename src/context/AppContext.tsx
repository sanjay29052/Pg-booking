import React, { createContext, useContext, useState, useEffect } from 'react';
import { FilterState, PGListing, User, BookingSubmission } from '../types';
import { SAMPLE_PGS } from '../data/pgData';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  pgs: PGListing[];
  favorites: string[];
  toggleFavorite: (pgId: string) => void;
  isFavorite: (pgId: string) => boolean;
  currentUser: User | null;
  login: (user: User) => void;
  logout: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  resetFilters: () => void;
  bookings: BookingSubmission[];
  addBooking: (bookingData: Omit<BookingSubmission, 'id' | 'timestamp'>) => void;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const defaultFilters: FilterState = {
  searchTerm: '',
  city: '',
  minRent: 4000,
  maxRent: 20000,
  gender: 'Any',
  roomTypes: [],
  facilities: [],
  sortBy: 'popular'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pgs] = useState<PGListing[]>(SAMPLE_PGS);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pg_finder_favorites');
      return saved ? JSON.parse(saved) : ['pg-1', 'pg-2'];
    } catch {
      return ['pg-1', 'pg-2'];
    }
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('pg_finder_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [bookings, setBookings] = useState<BookingSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('pg_finder_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pg_finder_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('pg_finder_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('pg_finder_user');
      }
    } catch (e) {
      console.error('Failed to save user to localStorage', e);
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem('pg_finder_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings to localStorage', e);
    }
  }, [bookings]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleFavorite = (pgId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(pgId);
      const updated = exists ? prev.filter((id) => id !== pgId) : [...prev, pgId];
      const targetPG = pgs.find((p) => p.id === pgId);
      const name = targetPG ? targetPG.name : 'PG';
      if (exists) {
        showToast(`Removed "${name}" from your favorites`, 'info');
      } else {
        showToast(`Added "${name}" to your favorites`, 'success');
      }
      return updated;
    });
  };

  const isFavorite = (pgId: string) => favorites.includes(pgId);

  const login = (user: User) => {
    setCurrentUser(user);
    showToast(`Welcome back, ${user.fullName}!`, 'success');
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Logged out successfully', 'info');
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    showToast('Filters have been reset', 'info');
  };

  const addBooking = (bookingData: Omit<BookingSubmission, 'id' | 'timestamp'>) => {
    const newBooking: BookingSubmission = {
      ...bookingData,
      id: 'book-' + Date.now(),
      timestamp: new Date().toISOString()
    };
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Visit booked for ${bookingData.pgName} on ${bookingData.visitDate}!`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        pgs,
        favorites,
        toggleFavorite,
        isFavorite,
        currentUser,
        login,
        logout,
        filters,
        setFilters,
        updateFilters,
        resetFilters,
        bookings,
        addBooking,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

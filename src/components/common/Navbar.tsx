import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Building2, Heart, Menu, X, User as UserIcon, LogOut, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites, currentUser, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? 'text-blue-600 bg-blue-50/80 font-semibold'
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
      isActive
        ? 'text-blue-600 bg-blue-50 font-semibold'
        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            id="nav-brand-logo"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                  PG<span className="text-blue-600">Finder</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded uppercase tracking-wider border border-blue-100">
                  Verified
                </span>
              </div>
              <p className="hidden sm:block text-[10px] text-slate-500 -mt-0.5 font-medium">
                Find Your Perfect PG
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/find-pg" className={navLinkClass}>
              Find PG
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-rose-600 bg-rose-50/80 font-semibold'
                    : 'text-slate-600 hover:text-rose-600 hover:bg-slate-50'
                }`
              }
            >
              <Heart className="w-4 h-4 fill-rose-500/20 text-rose-500" />
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-xs font-bold bg-rose-500 text-white rounded-full leading-none">
                  {favorites.length}
                </span>
              )}
            </NavLink>
          </nav>

          {/* User Auth Buttons / Profile */}
          <div className="hidden md:flex items-center space-x-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    {currentUser.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800 leading-none">
                      {currentUser.fullName}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {currentUser.userType}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  id="nav-logout-btn"
                  className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  id="nav-login-link"
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  id="nav-register-link"
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/favorites"
              className="relative p-2 text-slate-600 hover:text-rose-600"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5 text-rose-500" />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 px-1.5 py-0.2 text-[10px] font-bold bg-rose-500 text-white rounded-full">
                  {favorites.length}
                </span>
              )}
            </Link>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <NavLink
            to="/"
            className={mobileNavLinkClass}
            end
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/find-pg"
            className={mobileNavLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Find PG Accommodations
          </NavLink>
          <NavLink
            to="/favorites"
            className={mobileNavLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Saved Favorites ({favorites.length})
          </NavLink>
          <NavLink
            to="/about"
            className={mobileNavLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={mobileNavLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact & Support
          </NavLink>

          <div className="pt-3 border-t border-slate-100">
            {currentUser ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-xl">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                    {currentUser.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{currentUser.fullName}</p>
                    <p className="text-xs text-slate-500">{currentUser.email}</p>
                    <span className="inline-block mt-0.5 text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-medium border border-blue-100">
                      {currentUser.userType}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

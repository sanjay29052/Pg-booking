import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Mail, Lock, Eye, EyeOff, LogIn, CheckCircle, AlertCircle } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const { login, showToast } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const validate = () => {
    const err: Record<string, string> = {};
    if (!email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = 'Please enter a valid email format';
    }

    if (!password) {
      err.password = 'Password is required';
    } else if (password.length < 6) {
      err.password = 'Password must be at least 6 characters';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      // Create authenticated mock user profile
      const derivedName = email.split('@')[0].replace(/[._]/g, ' ');
      const formattedName =
        derivedName.charAt(0).toUpperCase() + derivedName.slice(1) || 'Member';

      login({
        id: 'user-' + Date.now(),
        fullName: formattedName,
        email: email.trim(),
        phone: '+91 98765 43210',
        userType: 'Working Professional'
      });

      setLoading(false);
      navigate('/');
    }, 600);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim() || !/\S+@\S+\.\S+/.test(forgotEmail)) {
      showToast('Please enter a valid email address to reset password', 'error');
      return;
    }
    showToast(`Password reset link sent to ${forgotEmail}`, 'success');
    setForgotModalOpen(false);
    setForgotEmail('');
  };

  const fillDemoAccount = (role: 'student' | 'professional') => {
    if (role === 'student') {
      setEmail('ananya.student@gmail.com');
      setPassword('Password123');
    } else {
      setEmail('karthik.tech@amazon.com');
      setPassword('TechLead2026');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-xl shadow-slate-900/5">
      <div className="text-center mb-7">
        <h2 className="text-2xl font-extrabold text-slate-900">Welcome Back</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Login to manage your favorites, view scheduled visits, and connect with PG owners.
        </p>
      </div>

      {/* Quick Demo Credentials helper */}
      <div className="mb-6 p-3 bg-blue-50/70 border border-blue-100 rounded-2xl">
        <div className="flex items-center justify-between text-xs text-blue-950 font-semibold mb-1.5">
          <span>Quick Demo Fill:</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => fillDemoAccount('student')}
            className="py-1.5 px-2 bg-white text-[11px] font-semibold text-blue-700 rounded-xl border border-blue-200 hover:bg-blue-100/50 transition-colors text-center"
          >
            🎓 Demo Student
          </button>
          <button
            type="button"
            onClick={() => fillDemoAccount('professional')}
            className="py-1.5 px-2 bg-white text-[11px] font-semibold text-blue-700 rounded-xl border border-blue-200 hover:bg-blue-100/50 transition-colors text-center"
          >
            💼 Demo Professional
          </button>
        </div>
      </div>

      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="login-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
              } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="login-password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full pl-10 pr-10 py-2.5 bg-slate-50 border ${
                errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
              } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="text-[11px] text-rose-500 mt-1">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-slate-600">
            <input
              id="login-remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => setForgotModalOpen(true)}
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          id="login-submit-btn"
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 mt-2"
        >
          {loading ? (
            <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>Login to Account</span>
            </>
          )}
        </button>
      </form>

      <div className="text-center mt-6 pt-5 border-t border-slate-100">
        <p className="text-xs text-slate-500">
          Don’t have an account yet?{' '}
          <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">
            Register for Free
          </Link>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Reset Your Password</h3>
            <p className="text-xs text-slate-500">
              Enter your registered email address and we'll send a password reset code.
            </p>
            <form onSubmit={handleForgotSubmit} className="space-y-3">
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(false)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

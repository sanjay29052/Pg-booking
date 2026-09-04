import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { UserType } from '../../types';
import { User, Mail, Phone, Lock, Eye, EyeOff, UserCheck, ShieldCheck, GraduationCap, Briefcase } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  const { login, showToast } = useApp();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('Student');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = 'Full Name is required';
    if (!email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = 'Please enter a valid email format';
    }

    if (!phone.trim()) {
      err.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(phone.trim())) {
      err.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!password) {
      err.password = 'Password is required';
    } else if (password.length < 6) {
      err.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      err.confirmPassword = 'Passwords do not match';
    }

    if (!agreeTerms) {
      err.agreeTerms = 'You must agree to the Terms of Service';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      login({
        id: 'user-' + Date.now(),
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        userType
      });
      setLoading(false);
      showToast('Registration successful! Welcome to PG Finder.', 'success');
      navigate('/find-pg');
    }, 600);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-xl shadow-slate-900/5">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Create an Account</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Join thousands of students and young professionals finding their dream PG with 0% brokerage.
        </p>
      </div>

      <form onSubmit={handleRegisterSubmit} className="space-y-4">
        {/* User Type Selection: Student vs Working Professional */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            I am a: <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              id="user-type-student"
              onClick={() => setUserType('Student')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl border transition-all text-xs font-bold ${
                userType === 'Student'
                  ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>College Student</span>
            </button>
            <button
              type="button"
              id="user-type-professional"
              onClick={() => setUserType('Working Professional')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl border transition-all text-xs font-bold ${
                userType === 'Working Professional'
                  ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Working Professional</span>
            </button>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="register-fullname-input"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ananya Sundaram"
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
              } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="register-email-input"
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
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="register-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9876543210"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${
                  errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Create Password <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="register-password-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 chars"
                className={`w-full pl-10 pr-8 py-2.5 bg-slate-50 border ${
                  errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
            </div>
            {errors.password && <p className="text-[11px] text-rose-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Confirm Password <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="register-confirm-password-input"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                className={`w-full pl-10 pr-8 py-2.5 bg-slate-50 border ${
                  errors.confirmPassword ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-[11px] text-rose-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Agree terms */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 h-4 w-4 shrink-0"
            />
            <span>
              I agree to the PG Finder{' '}
              <Link to="/about" className="text-blue-600 hover:underline font-semibold">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/about" className="text-blue-600 hover:underline font-semibold">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.agreeTerms && <p className="text-[11px] text-rose-500 mt-1">{errors.agreeTerms}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          id="register-submit-btn"
          disabled={loading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 mt-2"
        >
          {loading ? (
            <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <UserCheck className="w-4 h-4" />
              <span>Complete Free Registration</span>
            </>
          )}
        </button>
      </form>

      <div className="text-center mt-6 pt-5 border-t border-slate-100">
        <p className="text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

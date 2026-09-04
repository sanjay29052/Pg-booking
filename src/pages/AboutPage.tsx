import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Users,
  Target,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-16 sm:py-20 border-b border-slate-200/80 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            About PG Finder
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 leading-tight">
            Bridging Students & Professionals with Safe, Homely Accommodations
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            We are on a mission to bring complete transparency, zero brokerage, and verified peace of
            mind to paying guest discovery across South India.
          </p>
        </div>
      </section>

      {/* Story & Why it was created */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
              Our Genesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why We Created PG Finder
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Moving to a new city for college or a first job is supposed to be an exciting milestone.
              Yet, for millions of students and young engineers arriving in Bangalore, Chennai,
              Hyderabad, Coimbatore, and Madurai, the first week is often marred by exorbitant broker
              fees, substandard food, safety anxieties, and rooms that looked nothing like their
              photos.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              PG Finder was built as an honest, student-first discovery engine. We eliminate middleman
              commissions, mandate physical safety audits, verify amenities like Wi-Fi and hygiene,
              and empower residents with direct owner contact and free visit booking.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Students studying and collaborating"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-200 max-w-xs hidden sm:block">
              <p className="text-2xl font-black text-blue-600">100%</p>
              <p className="text-xs font-bold text-slate-800">Zero Brokerage Guarantee</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Connecting tenants directly to property owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Benefits: Students vs Professionals */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Tailored For Your Lifestyle
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Whether you are preparing for exams or building scalable software, we have the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Students Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">For College Students</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Budget-friendly triple and double sharing rooms starting from ₹5,200/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Walkable proximity to premier colleges (Anna Univ, Christ, PSG Tech, Lady Doak)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Round-the-clock security, CCTV, biometric gates, and caring wardens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Wholesome 3-time home-cooked meals including breakfast, lunch, and dinner</span>
                </li>
              </ul>
            </div>

            {/* Professionals Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">For Working Professionals</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Private single suites with attached bath, ergonomic work desks, and AC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Strategically situated along tech corridors (OMR, Koramangala, Hitec City, Whitefield)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>High-speed commercial fiber internet (up to 200 Mbps) with 100% power backup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Housekeeping, automated laundry machines, and fitness gyms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Core Principles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Total Transparency</h4>
            <p className="text-xs text-slate-500">
              Clear security deposit policies, zero hidden maintenance surcharges, and direct receipts.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <HeartHandshake className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Direct Owner Dialogue</h4>
            <p className="text-xs text-slate-500">
              Chat directly with property managers before paying or committing to any terms.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">Continuous Quality Control</h4>
            <p className="text-xs text-slate-500">
              Resident feedback audits ensure listings maintain clean rooms, timely meals, and proper Wi-Fi.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/find-pg"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm"
          >
            <span>Explore Paying Guest Accommodations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Shield, TrendingUp, Bell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-200">
              <Shield className="h-4 w-4" /> Governance & Spend Control for SAP BTP
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Single-Click Visibility from Global to Subaccount
            </h1>
            <p className="mt-5 text-lg leading-7 text-gray-600">
              Know what’s activated, who owns it, and what it costs—right now. Our role-based dashboards give your CIO, CFO, and CTO real-time guardrails, without granting global-account access to everyone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#dashboards" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <TrendingUp className="h-4 w-4" /> See Dashboards
              </a>
              <a href="#solution" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-semibold ring-1 ring-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <Bell className="h-4 w-4" /> Explore Solution
              </a>
            </div>
            <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Real-time alerts</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Right-sized plans</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Least-privilege access</li>
            </ul>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="px-6 pt-6 pb-4 border-b border-gray-100 bg-gradient-to-r from-indigo-600 to-blue-600">
                <div className="flex items-center gap-2 text-white">
                  <div className="h-2 w-2 rounded-full bg-white/80" />
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                  <div className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="ml-2 text-sm font-medium">BTP Estate Overview</span>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <Stat label="Global Accounts" value="3" trend="Stable" />
                <Stat label="Subaccounts" value="58" trend="+2 this week" />
                <Stat label="Regions" value="7" trend="Aligned" />
                <Stat label="Active Services" value="214" trend="-12 right-sized" />
                <Divider />
                <KPI title="Run-rate" value="$84,210" hint="Current month" color="indigo" />
                <KPI title="Forecast (90d)" value="$243k" hint="Trending up" color="blue" />
                <KPI title="Potential Savings" value="$31k" hint="Right-size report" color="emerald" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, trend }) {
  return (
    <div className="space-y-1">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-xs text-emerald-600">{trend}</div>
    </div>
  );
}

function KPI({ title, value, hint, color = 'indigo' }) {
  const colorMap = {
    indigo: 'from-indigo-500 to-indigo-600',
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
  };
  return (
    <div className="col-span-2 sm:col-span-1">
      <div className={`rounded-xl p-4 text-white bg-gradient-to-br ${colorMap[color]} shadow`}> 
        <div className="text-sm/5 text-white/80">{title}</div>
        <div className="mt-1 text-xl font-semibold">{value}</div>
        <div className="mt-1 text-xs text-white/80">{hint}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="col-span-2 sm:col-span-4 h-px bg-gray-100" />;
}

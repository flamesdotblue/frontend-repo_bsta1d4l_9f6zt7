import React from 'react';
import { Users, DollarSign, Shield, CheckCircle } from 'lucide-react';

const roles = [
  {
    icon: Shield,
    role: 'CIO (Outcome & Risk)',
    bullets: [
      'Estate at a glance: global accounts, subaccounts, regions, environments',
      'Top risk indicators: over‑permissioned roles, untagged services, policy violations',
      'Transformation KPIs: adoption vs. target, POC→Prod conversion, region alignment'
    ]
  },
  {
    icon: DollarSign,
    role: 'CFO (Cost & Forecast)',
    bullets: [
      'Current month run‑rate and variance vs. budget with 90‑day forecast',
      'Idle/underutilized services and potential savings (right‑size report)',
      'Chargeback by LOB/cost center with CSV exports'
    ]
  },
  {
    icon: Users,
    role: 'CTO / Platform Lead (Ops & Compliance)',
    bullets: [
      'Entitlements vs. usage heatmap; quota headroom; upcoming renewals',
      'Drift detection: non‑standard regions/plans, trial‑to‑paid watchlist',
      'Deployment hygiene: inactive subaccounts, stale instances, failed backups'
    ]
  }
];

export default function RoleDashboards() {
  return (
    <section id="dashboards" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboards by Role</h2>
          <p className="mt-3 text-gray-600">
            Tailored, single‑click views for leaders and platform teams—without global‑account sprawl.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.role} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{r.role}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {r.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

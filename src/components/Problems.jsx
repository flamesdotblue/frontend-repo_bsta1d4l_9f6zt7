import React from 'react';
import { AlertTriangle, Globe, Server, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: Globe,
    title: 'Fragmented visibility',
    desc:
      'Entitlements, subscriptions, and runtime services scattered across directories, subaccounts, regions, and environments.'
  },
  {
    icon: DollarSign,
    title: 'Wrong plans & shelfware',
    desc:
      'Higher-cost plans left idle after POCs; trials flip to paid unnoticed, creating surprise bills.'
  },
  {
    icon: Server,
    title: 'No single source of truth',
    desc:
      'Finance, security, and platform teams rely on spreadsheets and ad‑hoc exports that are weeks out of date.'
  },
  {
    icon: AlertTriangle,
    title: 'Chargeback chaos & late alerts',
    desc:
      'Hard to attribute costs; alerts arrive late and overages are discovered on the invoice.'
  }
];

export default function Problems() {
  return (
    <section id="problems" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">The Problems We Solve</h2>
          <p className="mt-3 text-gray-600">
            Why organizations struggle to manage SAP BTP at scale.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

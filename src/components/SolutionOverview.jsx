import React from 'react';
import { Globe, Shield, TrendingUp, Bell, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global → Subaccount Inventory',
    desc: 'Map global accounts, directories, subaccounts, regions, environments, service instances, and subscriptions with owners, tags, and cost centers.'
  },
  {
    icon: Shield,
    title: 'Entitlement vs. Subscription Health',
    desc: 'Reconcile entitlements, quotas, and active plans in one place. Highlight mismatches, idle services, and shadow subscriptions.'
  },
  {
    icon: TrendingUp,
    title: 'Near Real‑Time Consumption & Forecasts',
    desc: 'Stream usage signals where available with trending and 30/60/90‑day spend forecasting.'
  },
  {
    icon: BarChart3,
    title: 'Right‑Sizing & Plan Recommendations',
    desc: 'Policy engine suggests optimal plans, consolidations, and safe decommissions.'
  },
  {
    icon: Shield,
    title: 'Guardrails & Approvals',
    desc: 'Prevent unapproved activations with pre‑checks and approvals; auto‑tag new services by project/cost center.'
  },
  {
    icon: Bell,
    title: 'Alerting to Admin Groups',
    desc: 'Email alerts for spend spikes, unexpected activations, quota exhaustion, sensitive role changes, and region drift.'
  },
  {
    icon: Users,
    title: 'Least‑Privilege Access',
    desc: 'Curated views per role so stakeholders stay informed while admins retain tight control.'
  }
];

export default function SolutionOverview() {
  return (
    <section id="solution" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What You Get</h2>
          <p className="mt-3 text-gray-600">
            A unified control plane for SAP BTP: visibility, guardrails, and actionable savings in one place.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-indigo-900">
          <p className="text-sm">
            Implementation in weeks, not months: connect your accounts, baseline inventory and savings, enable governance packs and dashboards, then optimize and operate with monthly FinOps and compliance reports.
          </p>
        </div>
      </div>
    </section>
  );
}

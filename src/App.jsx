import React from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import SolutionOverview from './components/SolutionOverview';
import RoleDashboards from './components/RoleDashboards';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Problems />
        <SolutionOverview />
        <RoleDashboards />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-gray-900">SAP BTP Governance</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#problems" className="hover:text-gray-900">Problems</a>
          <a href="#solution" className="hover:text-gray-900">Solution</a>
          <a href="#dashboards" className="hover:text-gray-900">Dashboards</a>
        </nav>
        <a href="#cta" className="rounded-lg bg-gray-900 text-white text-sm font-semibold px-4 py-2 hover:bg-black">Get a Live Demo</a>
      </div>
    </header>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold">Say goodbye to surprise bills and blind spots.</h3>
          <p className="mt-3 text-white/90 max-w-2xl">
            Enable real-time alerts, automated governance, and right-sized subscriptions across your SAP BTP estate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#" className="rounded-lg bg-white text-gray-900 font-semibold text-sm px-5 py-3 shadow hover:bg-gray-50">Request Demo</a>
            <a href="#solution" className="rounded-lg bg-white/10 text-white font-semibold text-sm px-5 py-3 ring-1 ring-white/40 hover:bg-white/20">Explore Features</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SAP BTP Governance & Spend Control</p>
        <div className="flex items-center gap-5">
          <a href="#problems" className="hover:text-gray-900">Why us</a>
          <a href="#solution" className="hover:text-gray-900">What you get</a>
          <a href="#dashboards" className="hover:text-gray-900">Dashboards</a>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { WasteProvider } from './context/WasteContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/dashboard/HeroSection';
import { SimulationControls } from './components/interactive/SimulationControls';
import { PersonalImpact } from './components/interactive/PersonalImpact'; // FIXED
import { HistoricalTrend } from './components/visualization/HistoricalTrend';
import { WasteDistribution } from './components/visualization/WasteDistribution';
import { InteractiveQuiz } from './components/educational/InteractiveQuiz';
import { RealWorldEquivalents } from './components/visualization/RealWorldEquivalents';
import './App.css';

function App() {
  return (
    <WasteProvider>
      <div className="min-h-screen bg-dark-slate text-white">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero Section with Counters */}
          <section id="dashboard" className="mb-12">
            <HeroSection />
          </section>
          
          {/* Controls & Personal Impact */}
          <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SimulationControls />
            </div>
            <div>
              <PersonalImpact />
            </div>
          </section>
          
          {/* Data Visualizations */}
          <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HistoricalTrend />
            <WasteDistribution />
          </section>
          
          {/* Real World Comparisons */}
          <section className="mb-12">
            <RealWorldEquivalents />
          </section>
          
          {/* Educational Components */}
          <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InteractiveQuiz />
            <div className="bg-dark-gray rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Reduction Tips</h3>
              <div className="space-y-4">
                <div className="p-4 bg-dark-slate rounded-lg">
                  <h4 className="font-semibold text-neon-green mb-2">Smart Shopping</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Plan meals for the week</li>
                    <li>• Make a shopping list and stick to it</li>
                    <li>• Buy imperfect produce</li>
                    <li>• Check expiration dates</li>
                  </ul>
                </div>
                <div className="p-4 bg-dark-slate rounded-lg">
                  <h4 className="font-semibold text-ocean-blue mb-2">Proper Storage</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Store fruits and vegetables separately</li>
                    <li>• Freeze leftovers promptly</li>
                    <li>• Use airtight containers</li>
                    <li>• Understand "best before" vs "use by" dates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </WasteProvider>
  );
}

export default App;
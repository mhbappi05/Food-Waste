import React from 'react';
import { useWaste } from '../../context/WasteContext'; // Make sure this import is correct
import { formatNumber, formatWeight, formatCurrency } from '../../utils/formatters';
import { WasteCounter } from '../visualization/AnimatedCounter';

export function HeroSection() {
  const { state } = useWaste();
  
  return (
    <div className="hero-section bg-dark-slate text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Global Food Waste Dashboard
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center">
          Real-time visualization of food waste impact worldwide
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Food Waste Counter */}
          <div className="bg-dark-gray p-6 rounded-xl">
            <div className="text-waste-red mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Food Waste</h3>
            <div className="text-3xl font-bold font-jetbrains">
              <WasteCounter value={state.foodWaste} formatter={formatWeight} />
            </div>
            <p className="text-gray-400 text-sm">per second</p>
          </div>
          
          {/* Economic Loss Counter */}
          <div className="bg-dark-gray p-6 rounded-xl">
            <div className="text-neon-green mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Economic Loss</h3>
            <div className="text-3xl font-bold font-jetbrains">
              <WasteCounter value={state.economicLoss} formatter={formatCurrency} />
            </div>
            <p className="text-gray-400 text-sm">per second</p>
          </div>
          
          {/* CO2 Emissions Counter */}
          <div className="bg-dark-gray p-6 rounded-xl">
            <div className="text-ocean-blue mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm4-9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zM7 3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm12 15c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1zm-4-7h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zM3 15h4c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">CO2 Emissions</h3>
            <div className="text-3xl font-bold font-jetbrains">
              <WasteCounter value={state.co2Emissions} formatter={(v) => formatNumber(v) + ' kg'} />
            </div>
            <p className="text-gray-400 text-sm">per second</p>
          </div>
          
          {/* Water Waste Counter */}
          <div className="bg-dark-gray p-6 rounded-xl">
            <div className="text-ocean-blue mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Water Waste</h3>
            <div className="text-3xl font-bold font-jetbrains">
              <WasteCounter value={state.waterWaste} formatter={(v) => formatNumber(v) + ' m³'} />
            </div>
            <p className="text-gray-400 text-sm">per second</p>
          </div>
          
          {/* People Fed Counter */}
          <div className="bg-dark-gray p-6 rounded-xl">
            <div className="text-compassion-purple mb-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">People Could Be Fed</h3>
            <div className="text-3xl font-bold font-jetbrains">
              <WasteCounter value={state.peopleFed} formatter={formatNumber} />
            </div>
            <p className="text-gray-400 text-sm">per second</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            Total food wasted since you started viewing: <span className="font-bold text-waste-red">
              {formatWeight(state.totalFoodWaste)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
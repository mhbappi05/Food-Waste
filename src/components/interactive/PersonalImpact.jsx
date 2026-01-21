import React, { useState } from 'react';
import { Calculator, Users, Droplets, TreePine, DollarSign } from 'lucide-react';
import { formatNumber, formatCurrency } from '../../utils/formatters';

export function PersonalImpact() {
  const [userData, setUserData] = useState({
    householdSize: 1,
    weeklyWaste: 0, // in kg
    reductionActions: [],
  });
  
  const calculatePersonalImpact = () => {
    const annualWaste = userData.weeklyWaste * 52;
    const co2Saved = annualWaste * 4.2;
    const waterSaved = annualWaste * 1500;
    const moneySaved = annualWaste * 3.5; // Average $/kg
    
    return {
      annualWaste,
      co2Saved,
      waterSaved,
      moneySaved,
      peopleFed: annualWaste * 2.5, // Approx people fed per kg
      equivalentTo: {
        carMiles: co2Saved / 0.404, // kg CO2 per mile
        showers: waterSaved / 65, // liters per shower
        smartphones: moneySaved / 800,
      },
    };
  };
  
  const impact = calculatePersonalImpact();
  
  return (
    <div className="bg-dark-gray rounded-xl p-6">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-compassion-purple mr-2" />
        <h3 className="text-xl font-bold text-white">Personal Impact Calculator</h3>
      </div>
      
      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-300 mb-2">
            <Users className="inline w-4 h-4 mr-1" />
            Household Size
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={userData.householdSize}
            onChange={(e) => setUserData({ ...userData, householdSize: parseInt(e.target.value) || 1 })}
            className="w-full bg-dark-slate border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-compassion-purple"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">
            Weekly Food Waste (kg)
          </label>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="20"
              step="0.5"
              value={userData.weeklyWaste}
              onChange={(e) => setUserData({ ...userData, weeklyWaste: parseFloat(e.target.value) })}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm">
              {userData.weeklyWaste} kg
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Average household: 2-3 kg/week
          </p>
        </div>
      </div>
      
      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-dark-slate p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <TreePine className="w-5 h-5 text-ocean-blue mr-2" />
            <h4 className="font-semibold text-white">CO2 Saved</h4>
          </div>
          <p className="text-2xl font-bold text-ocean-blue">
            {formatNumber(impact.co2Saved)} kg
          </p>
          <p className="text-sm text-gray-400">
            = {formatNumber(impact.equivalentTo.carMiles)} car miles
          </p>
        </div>
        
        <div className="bg-dark-slate p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Droplets className="w-5 h-5 text-blue-400 mr-2" />
            <h4 className="font-semibold text-white">Water Saved</h4>
          </div>
          <p className="text-2xl font-bold text-blue-400">
            {formatNumber(impact.waterSaved)} L
          </p>
          <p className="text-sm text-gray-400">
            = {formatNumber(impact.equivalentTo.showers)} showers
          </p>
        </div>
        
        <div className="bg-dark-slate p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-neon-green mr-2" />
            <h4 className="font-semibold text-white">Money Saved</h4>
          </div>
          <p className="text-2xl font-bold text-neon-green">
            {formatCurrency(impact.moneySaved)}
          </p>
          <p className="text-sm text-gray-400">
            = {formatNumber(impact.equivalentTo.smartphones, 1)} smartphones
          </p>
        </div>
        
        <div className="bg-dark-slate p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-compassion-purple mr-2" />
            <h4 className="font-semibold text-white">People Fed</h4>
          </div>
          <p className="text-2xl font-bold text-compassion-purple">
            {formatNumber(impact.peopleFed)}
          </p>
          <p className="text-sm text-gray-400">
            for one day
          </p>
        </div>
      </div>
      
      {/* Tips */}
      <div className="mt-6 p-4 bg-warning-yellow/10 border border-warning-yellow/30 rounded-lg">
        <h4 className="font-semibold text-warning-yellow mb-2">Reduction Tips:</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Plan meals and create shopping lists</li>
          <li>• Store food properly to extend freshness</li>
          <li>• Use leftovers creatively</li>
          <li>• Compost food scraps</li>
          <li>• Donate excess food to local charities</li>
        </ul>
      </div>
    </div>
  );
}
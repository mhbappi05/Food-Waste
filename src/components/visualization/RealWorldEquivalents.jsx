import React from 'react';
import { useWaste } from '../../context/WasteContext';
import { formatNumber } from '../../utils/formatters';
import { getRealWorldEquivalents } from '../../utils/equivalents';
import { Package, Droplets, Factory, School, Hospital } from 'lucide-react';

export function RealWorldEquivalents() {
  const { state } = useWaste();
  const equivalents = getRealWorldEquivalents(state.totalFoodWaste);
  
  const comparisons = [
    {
      icon: <Package className="w-6 h-6" />,
      label: "Equivalent to",
      value: formatNumber(equivalents.elephants, 1),
      unit: "African elephants",
      color: "text-waste-red",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      label: "Water wasted could fill",
      value: formatNumber(equivalents.olympicPools, 1),
      unit: "Olympic swimming pools",
      color: "text-blue-400",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      label: "Economic value equals",
      value: formatNumber(equivalents.smartphones, 0),
      unit: "smartphones",
      color: "text-neon-green",
    },
    {
      icon: <School className="w-6 h-6" />,
      label: "Could provide",
      value: formatNumber(equivalents.schoolMeals, 0),
      unit: "school meals",
      color: "text-warning-yellow",
    },
    {
      icon: <Hospital className="w-6 h-6" />,
      label: "Healthcare funding for",
      value: formatNumber(equivalents.hospitalBeds, 0),
      unit: "hospital beds for a year",
      color: "text-compassion-purple",
    },
  ];
  
  return (
    <div className="bg-dark-gray rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Real-World Comparisons</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {comparisons.map((item, index) => (
          <div key={index} className="bg-dark-slate p-4 rounded-lg text-center">
            <div className={`${item.color} mb-2 flex justify-center`}>
              {item.icon}
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {item.value}
            </div>
            <div className="text-sm text-gray-400">
              {item.unit}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
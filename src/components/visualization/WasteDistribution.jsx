import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const sectorData = [
  { name: 'Household', value: 61, color: '#DC2626' },
  { name: 'Food Service', value: 26, color: '#F59E0B' },
  { name: 'Retail', value: 13, color: '#3B82F6' },
];

export function WasteDistribution() {
  return (
    <div className="bg-dark-gray rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Food Waste by Sector</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sectorData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {sectorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Share']}
              contentStyle={{ 
                backgroundColor: '#1F2937',
                borderColor: '#374151',
                color: '#F9FAFB'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>Households account for the majority of food waste globally</p>
      </div>
    </div>
  );
}
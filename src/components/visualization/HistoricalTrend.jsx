import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const historicalData = [
  { year: 2000, waste: 680, peopleFed: 1900 },
  { year: 2005, waste: 720, peopleFed: 2016 },
  { year: 2010, waste: 780, peopleFed: 2184 },
  { year: 2015, waste: 890, peopleFed: 2492 },
  { year: 2020, waste: 940, peopleFed: 2632 },
  { year: 2025, waste: 1020, peopleFed: 2856 },
  { year: 2026, waste: 1050, peopleFed: 2940 },
];

export function HistoricalTrend() {
  return (
    <div className="bg-dark-gray rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Historical Food Waste Trends</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="year" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              label={{ 
                value: 'Million Tonnes', 
                angle: -90, 
                position: 'insideLeft',
                fill: '#9CA3AF'
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                borderColor: '#374151',
                color: '#F9FAFB'
              }}
              formatter={(value) => [`${value}M tonnes`, 'Food Waste']}
            />
            <Line 
              type="monotone" 
              dataKey="waste" 
              stroke="#DC2626" 
              strokeWidth={3}
              dot={{ stroke: '#DC2626', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>Food waste has increased by 54% since 2000</p>
      </div>
    </div>
  );
}
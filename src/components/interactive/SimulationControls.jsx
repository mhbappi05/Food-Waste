import React from 'react';
import { Play, Pause, RotateCcw, FastForward } from 'lucide-react';
import { useWaste } from '../../context/WasteContext';

export function SimulationControls() {
  const { state, dispatch } = useWaste();
  
  const speeds = [
    { value: 0.25, label: '0.25x' },
    { value: 0.5, label: '0.5x' },
    { value: 1, label: '1x (Real-time)' },
    { value: 2, label: '2x' },
    { value: 5, label: '5x' },
    { value: 10, label: '10x' },
    { value: 100, label: '100x' },
  ];
  
  return (
    <div className="bg-dark-gray rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Simulation Controls</h3>
      
      <div className="flex flex-wrap items-center gap-4">
        {/* Pause/Resume Button */}
        <button
          onClick={() => dispatch({ type: 'TOGGLE_PAUSE' })}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${
            state.isPaused 
              ? 'bg-neon-green text-white hover:bg-green-600' 
              : 'bg-waste-red text-white hover:bg-red-700'
          }`}
          aria-label={state.isPaused ? 'Resume simulation' : 'Pause simulation'}
        >
          {state.isPaused ? (
            <>
              <Play className="w-5 h-5 mr-2" />
              Resume
            </>
          ) : (
            <>
              <Pause className="w-5 h-5 mr-2" />
              Pause
            </>
          )}
        </button>
        
        {/* Speed Control */}
        <div className="flex items-center space-x-2">
          <FastForward className="w-5 h-5 text-gray-400" />
          <label htmlFor="speed" className="text-gray-300">
            Speed:
          </label>
          <select
            id="speed"
            value={state.speedMultiplier}
            onChange={(e) => dispatch({ type: 'SET_SPEED', payload: e.target.value })}
            className="bg-dark-slate border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-ocean-blue"
          >
            {speeds.map((speed) => (
              <option key={speed.value} value={speed.value}>
                {speed.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Reset Button */}
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="flex items-center px-4 py-2 rounded-lg font-medium bg-gray-700 text-white hover:bg-gray-600 transition"
          aria-label="Reset counters"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Reset
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-400">
        <p>Current speed: {state.speedMultiplier}x real-time</p>
        <p>Simulation {state.isPaused ? 'paused' : 'running'}</p>
      </div>
    </div>
  );
}
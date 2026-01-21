import React, { createContext, useContext, useReducer, useEffect } from 'react';

const SECONDS_PER_YEAR = 31536000;
const CALORIES_PER_KG = 2500;
const DAILY_CALORIES_PER_PERSON = 2500;

// Base annual estimates (2026 projections)
const BASE_METRICS = {
  annualFoodWaste: 1.05e9, // tonnes
  annualEconomicLoss: 540e9, // USD
  annualCO2Emissions: 4.4e9, // tonnes
  annualWaterWaste: 675e9, // m³
  annualPeopleFedPotential: 3.1e9, // people/year
};

const initialState = {
  // Per-second values
  foodWaste: 0, // kg
  economicLoss: 0, // USD
  co2Emissions: 0, // kg
  waterWaste: 0, // m³
  peopleFed: 0, // people
  
  // Totals
  totalFoodWaste: 0,
  totalEconomicLoss: 0,
  
  // Simulation controls
  isPaused: false,
  speedMultiplier: 1,
  startTime: Date.now(),
};

function calculatePerSecond(annualValue, unit = 1) {
  return (annualValue * unit) / SECONDS_PER_YEAR;
}

const WasteContext = createContext();

function wasteReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTERS':
      const elapsed = (Date.now() - state.startTime) / 1000;
      const multiplier = state.speedMultiplier * elapsed;
      
      const newFoodWaste = calculatePerSecond(BASE_METRICS.annualFoodWaste, 1000) * multiplier;
      const newEconomicLoss = calculatePerSecond(BASE_METRICS.annualEconomicLoss) * multiplier;
      const newCO2Emissions = calculatePerSecond(BASE_METRICS.annualCO2Emissions, 1000) * multiplier;
      const newWaterWaste = calculatePerSecond(BASE_METRICS.annualWaterWaste) * multiplier;
      const newPeopleFed = calculatePerSecond(BASE_METRICS.annualPeopleFedPotential) * multiplier;
      
      return {
        ...state,
        foodWaste: newFoodWaste,
        economicLoss: newEconomicLoss,
        co2Emissions: newCO2Emissions,
        waterWaste: newWaterWaste,
        peopleFed: newPeopleFed,
        totalFoodWaste: state.totalFoodWaste + newFoodWaste,
      };
      
    case 'TOGGLE_PAUSE':
      return {
        ...state,
        isPaused: !state.isPaused,
        startTime: state.isPaused ? Date.now() : state.startTime,
      };
      
    case 'SET_SPEED':
      return {
        ...state,
        speedMultiplier: parseFloat(action.payload),
        startTime: Date.now(),
      };
      
    case 'RESET':
      return {
        ...initialState,
        startTime: Date.now(),
      };
      
    default:
      return state;
  }
}

export function WasteProvider({ children }) {
  const [state, dispatch] = useReducer(wasteReducer, initialState);
  
  useEffect(() => {
    if (state.isPaused) return;
    
    const interval = setInterval(() => {
      dispatch({ type: 'UPDATE_COUNTERS' });
    }, 100);
    
    return () => clearInterval(interval);
  }, [state.isPaused, state.speedMultiplier]);
  
  return (
    <WasteContext.Provider value={{ state, dispatch }}>
      {children}
    </WasteContext.Provider>
  );
}

// FIXED: Export as default object
export const useWaste = () => {
  const context = useContext(WasteContext);
  if (!context) {
    throw new Error('useWaste must be used within WasteProvider');
  }
  return context;
};
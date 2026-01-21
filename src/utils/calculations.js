export const SECONDS_PER_YEAR = 31536000;
export const CALORIES_PER_KG = 2500;
export const DAILY_CALORIES_PER_PERSON = 2500;

// Base annual estimates (2026 projections)
export const BASE_METRICS = {
  annualFoodWaste: 1.05e9, // tonnes
  annualEconomicLoss: 540e9, // USD
  annualCO2Emissions: 4.4e9, // tonnes
  annualWaterWaste: 675e9, // m³
  annualPeopleFedPotential: 3.1e9, // people/year
};

export function calculatePerSecond(annualValue, unit = 1) {
  return (annualValue * unit) / SECONDS_PER_YEAR;
}

export function calculatePeopleFed(totalWasteKg) {
  const caloriesAvailable = totalWasteKg * CALORIES_PER_KG;
  const peopleFedPerDay = caloriesAvailable / DAILY_CALORIES_PER_PERSON;
  
  return {
    perSecond: Math.floor(peopleFedPerDay / 86400),
    perDay: Math.floor(peopleFedPerDay),
    perYear: Math.floor(peopleFedPerDay * 365),
    meals: Math.floor(peopleFedPerDay * 3),
    equivalentTo: {
      unitedStates: Math.floor(peopleFedPerDay / 331900000),
      india: Math.floor(peopleFedPerDay / 1380000000),
      africa: Math.floor(peopleFedPerDay / 1340000000),
    },
  };
}

export function calculateEnvironmentalImpact(totalWasteKg) {
  const co2EmissionsKg = totalWasteKg * 4.2;
  const waterWasteLiters = totalWasteKg * 1500;
  
  return {
    co2: {
      kg: co2EmissionsKg,
      carsOffRoad: co2EmissionsKg / 4600,
      treesNeeded: co2EmissionsKg / 21,
      flights: co2EmissionsKg / 250,
    },
    water: {
      liters: waterWasteLiters,
      swimmingPools: waterWasteLiters / 2500000,
      yearsOfDrinking: waterWasteLiters / (730 * 365),
    },
    land: {
      footballFields: totalWasteKg / 25000,
      hectares: totalWasteKg / 10000,
    },
  };
}
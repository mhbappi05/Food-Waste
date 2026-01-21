export function getRealWorldEquivalents(totalWasteKg) {
    return {
      // Weight comparisons
      elephants: totalWasteKg / 6000,
      blueWhales: totalWasteKg / 150000,
      eiffelTowers: totalWasteKg / 10100000,
      
      // Volume comparisons
      olympicPools: (totalWasteKg * 1.5) / 2500000,
      empireStates: (totalWasteKg * 0.5) / 331000000,
      
      // Economic comparisons
      smartphones: (totalWasteKg * 1000) / 0.158,
      hospitalBeds: totalWasteKg / 500,
      schoolMeals: (totalWasteKg * 3) / 0.5,
    };
  }
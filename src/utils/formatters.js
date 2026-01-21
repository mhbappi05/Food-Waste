export function formatNumber(num, decimals = 0) {
    if (num >= 1e12) {
      return (num / 1e12).toFixed(decimals) + 'T';
    }
    if (num >= 1e9) {
      return (num / 1e9).toFixed(decimals) + 'B';
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(decimals) + 'M';
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(decimals) + 'K';
    }
    return num.toFixed(decimals);
  }
  
  export function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
  
  export function formatWeight(kg) {
    if (kg >= 1e9) {
      return (kg / 1e9).toFixed(1) + 'B kg';
    }
    if (kg >= 1e6) {
      return (kg / 1e6).toFixed(1) + 'M kg';
    }
    if (kg >= 1e3) {
      return (kg / 1e3).toFixed(1) + 'K kg';
    }
    return kg.toFixed(1) + ' kg';
  }
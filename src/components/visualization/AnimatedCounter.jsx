import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatNumber } from '../../utils/formatters';

export function WasteCounter({ value, formatter = formatNumber }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [value]);
  
  return (
    <motion.span
      key={displayValue}
      initial={{ scale: 0.5, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {formatter ? formatter(displayValue) : displayValue}
    </motion.span>
  );
}
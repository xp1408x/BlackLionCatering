
import React from 'react';

interface BrandMotifProps {
  className?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}

const BrandMotif: React.FC<BrandMotifProps> = ({ 
  className, 
  borderColor = 'border-white', 
  bgColor = 'bg-black', 
  textColor = 'text-white' 
}) => {
  return (
    <div className={`w-10 h-10 rounded-full border-2 ${borderColor} ${bgColor} flex items-center justify-center ${className}`}>
      <span className={`font-bold text-sm ${textColor}`}>BL</span>
    </div>
  );
};

export default BrandMotif;

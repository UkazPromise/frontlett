import React from 'react';

const NumberBadge = ({ number, bgColor, textColor }) => {
  return (
    <div className="border-gray-400 p-2 inline-flex items-center justify-center">
      <div className={`border border-gray-700 rounded-full w-8 h-8 flex items-center justify-center ${bgColor} ${textColor}`}>
        {number}
      </div>
    </div>
  );
};

export default NumberBadge;
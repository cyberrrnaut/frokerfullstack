import  { useState } from 'react';
import '../App.css'; // Import the custom CSS file

export function InputBox({ text, value, thousand = false, min, max }) {
  const [rangeValue, setRangeValue] = useState(value);

  // Handle input range changes
  const handleChange = (event) => {
    setRangeValue(Number(event.target.value));
  };

  const filledWidth = ((rangeValue - min) / (max - min)) * 100;

  const displayValue = () => {
    if (rangeValue >= 1000) {
      return '1M';
    }
    return thousand ? `${rangeValue}k` : rangeValue;
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-lg font-medium mb-2">
        {text}
      </label>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={rangeValue}
          onChange={handleChange}
          className="w-full h-6 bg-gray-300 rounded-xl appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #FFA500 ${filledWidth}%, #e5e7eb ${filledWidth}%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            left: `calc(${filledWidth}% - 16px)`, // Adjust thumb positioning
            top: '-40px', // Adjust position for value display
          }}
        >
          <div className="text-black">{displayValue()}</div>
        </div>
      </div>
    </div>
  );
}

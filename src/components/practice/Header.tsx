import React from 'react';

interface HeaderProps {
  streak: number;
}

const Header: React.FC<HeaderProps> = ({ streak }) => (
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold text-gray-800">
      Practice Mode
    </h2>
    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
      <span className="text-amber-500 text-lg">🔥</span>
      <span className="font-semibold text-gray-700">Streak: {streak}</span>
    </div>
  </div>
);

export default Header;
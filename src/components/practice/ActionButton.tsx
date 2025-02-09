import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="flex-1 px-6 py-4 rounded-xl bg-slate-800 text-white 
             font-semibold hover:bg-slate-700 transition-colors
             focus:outline-none focus:ring-4 focus:ring-slate-500/20"
  >
    {label}
  </button>
);

export default ActionButton;
import React from 'react';

interface AnswerInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const AnswerInput: React.FC<AnswerInputProps> = ({ value, onChange, onKeyPress }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder="Type your answer here..."
    className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 
             focus:border-slate-500 focus:outline-none focus:ring-4 
             focus:ring-slate-500/20 transition-all duration-300
             placeholder:text-gray-400 text-center"
    autoFocus
  />
);

export default AnswerInput;
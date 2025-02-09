import React from 'react';
import { Phrase } from '../../data/phrases';

interface QuestionProps {
  current: Phrase;
}

const Question: React.FC<QuestionProps> = ({ current }) => (
  <div className="text-center space-y-3">
    <p className="text-lg text-gray-600">
      Translate to <span className="font-semibold text-slate-800">{current.language}</span>
    </p>
    <p className="text-3xl font-medium text-slate-800">
      "FU"
    </p>
  </div>
);

export default Question;
import React from 'react';
import { ClipboardCopy, CheckCircle2 } from 'lucide-react';
import { Phrase } from '../../data/phrases';

interface LanguageCardProps {
  item: Phrase;
  index: number;
  isLearned: boolean;
  isCopied: boolean;
  onCopy: (text: string, index: number) => void;
}

const LanguageCard: React.FC<LanguageCardProps> = ({
  item,
  index,
  isLearned,
  isCopied,
  onCopy,
}) => (
  <div
    className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl 
             transition-all duration-300 border border-gray-100 
             flex flex-col gap-4 ${isLearned ? 'ring-2 ring-green-500' : ''}`}
  >
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-800">
        {item.language}
      </h2>
      <div className="flex items-center gap-2">
        {isLearned && (
          <span className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
            ✓ Learned
          </span>
        )}
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
          {index + 1}/50
        </span>
      </div>
    </div>
    
    <div className="space-y-2">
      <p className="text-2xl text-gray-800 font-medium">
        {item.phrase}
      </p>
      <p className="text-sm text-gray-500 font-mono">
        [{item.transcription}]
      </p>
    </div>

    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
      <button 
        onClick={() => onCopy(item.phrase, index)}
        className={`p-2 rounded-xl transition-all duration-300 relative
          ${isCopied ? 'bg-green-100 text-green-600 scale-110' : 'hover:bg-gray-100 text-gray-600'}`}
        title={isCopied ? "Copied!" : "Copy phrase"}
      >
        {isCopied ? (
          <CheckCircle2 className="w-5 h-5" />
        ) : (
          <ClipboardCopy className="w-5 h-5" />
        )}
      </button>
    </div>
  </div>
);

export default LanguageCard;
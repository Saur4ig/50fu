import React, { useState } from "react";
import phrases, { Phrase } from "../data/phrases";
import Header from "../components/practice/Header";
import Question from "../components/practice/Question";
import AnswerInput from "../components/practice/AnswerInput";
import Feedback from "../components/practice/Feedback";
import ActionButton from "../components/practice/ActionButton";

// Add this type at the top
type Progress = {
  [key: string]: boolean;
};

const Practice: React.FC = () => {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem('phraseProgress');
    return saved ? JSON.parse(saved) : {};
  });

  const getRandomPhrase = (): Phrase => {
    const unlearned = phrases.filter(phrase => !progress[phrase.language]);
    const learned = phrases.filter(phrase => progress[phrase.language]);
    
    // 80% chance to get unlearned phrase if available
    if (unlearned.length > 0 && Math.random() < 0.8) {
      return unlearned[Math.floor(Math.random() * unlearned.length)];
    }
    
    // 20% chance to get learned phrase, or if all phrases are learned
    const allPhrases = [...unlearned, ...learned];
    return allPhrases[Math.floor(Math.random() * allPhrases.length)];
  };

  const [current, setCurrent] = useState<Phrase>(getRandomPhrase());
  const [userInput, setUserInput] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [streak, setStreak] = useState(0);

  const handleCheck = () => {
    if (userInput.trim().toLowerCase() === current.phrase.trim().toLowerCase()) {
      const newProgress = { 
        ...progress, 
        [current.language]: true 
      };
      localStorage.setItem('phraseProgress', JSON.stringify(newProgress));
      setProgress(newProgress);
      setStreak(prev => prev + 1);
      setFeedback("🎉 Correct! Keep going!");
    } else {
      setStreak(0);
      setFeedback(`Not quite! The correct answer is "${current.phrase}"`);
    }
  };

  const handleNext = () => {
    setCurrent(getRandomPhrase());
    setUserInput("");
    setFeedback("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !feedback) {
      handleCheck();
    } else if (e.key === 'Enter' && feedback) {
      handleNext();
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="space-y-8">
            <Header streak={streak} />
            <Question current={current} />
            <AnswerInput
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Feedback message={feedback} />
            
            <div className="flex gap-4">
              <ActionButton
                onClick={feedback ? handleNext : handleCheck}
                label={feedback ? "Next Phrase" : "Check Answer"}
              />
            </div>

            <p className="text-center text-sm text-gray-500">
              Press Enter to {feedback ? "continue" : "check"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;

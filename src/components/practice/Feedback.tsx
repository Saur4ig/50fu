import React from 'react';

interface FeedbackProps {
  message: string;
}

const Feedback: React.FC<FeedbackProps> = ({ message }) => (
  message ? (
    <div
      className={`p-4 rounded-xl text-center ${
        message.includes("Correct")
          ? "bg-green-50 text-green-700 border border-green-100"
          : "bg-red-50 text-red-700 border border-red-100"
      }`}
    >
      <p className="text-lg font-medium">{message}</p>
    </div>
  ) : null
);

export default Feedback;
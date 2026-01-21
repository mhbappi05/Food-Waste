import React, { useState } from 'react';
import { Award, CheckCircle, XCircle } from 'lucide-react';

const questions = [
  {
    question: "Which sector wastes the most food globally?",
    options: ["Restaurants", "Households", "Supermarkets", "Farmers"],
    correct: 1,
    explanation: "Households account for 61% of all food waste globally.",
  },
  {
    question: "What percentage of all food produced is wasted?",
    options: ["15%", "25%", "33%", "50%"],
    correct: 2,
    explanation: "Approximately one-third of all food produced for human consumption is lost or wasted.",
  },
  {
    question: "Which food group is most commonly wasted?",
    options: ["Grains", "Fruits & Vegetables", "Dairy", "Meat"],
    correct: 1,
    explanation: "Fruits and vegetables have the highest waste rates due to perishability.",
  },
];

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const handleAnswer = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };
  
  return (
    <div className="bg-dark-gray rounded-xl p-6">
      <div className="flex items-center mb-6">
        <Award className="w-6 h-6 text-warning-yellow mr-2" />
        <h3 className="text-xl font-bold text-white">Food Waste Quiz</h3>
      </div>
      
      {!showResult ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-neon-green font-semibold">
                Score: {score}
              </span>
            </div>
            
            <h4 className="text-lg font-semibold text-white mb-6">
              {questions[currentQuestion].question}
            </h4>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg text-left transition ${
                    selectedAnswer === null
                      ? 'bg-dark-slate hover:bg-gray-800 text-white'
                      : selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? 'bg-neon-green/20 border-2 border-neon-green text-white'
                        : 'bg-waste-red/20 border-2 border-waste-red text-white'
                      : index === questions[currentQuestion].correct
                      ? 'bg-neon-green/20 border-2 border-neon-green text-white'
                      : 'bg-dark-slate text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selectedAnswer !== null && (
                      <>
                        {index === questions[currentQuestion].correct ? (
                          <CheckCircle className="w-5 h-5 text-neon-green" />
                        ) : selectedAnswer === index ? (
                          <XCircle className="w-5 h-5 text-waste-red" />
                        ) : null}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {selectedAnswer !== null && (
            <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-blue-300">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <Award className="w-16 h-16 text-warning-yellow mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h4>
          <p className="text-gray-300 mb-4">
            You scored {score} out of {questions.length}
          </p>
          <p className="text-gray-400 mb-6">
            That's {Math.round((score / questions.length) * 100)}% correct!
          </p>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-compassion-purple text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
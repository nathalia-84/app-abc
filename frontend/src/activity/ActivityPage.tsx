import React, { useEffect, useState } from 'react';
import { FaClock } from 'react-icons/fa';

const ActivityPage: React.FC = () => {
  const [seconds, setSeconds] = useState(300); // 5 minutos em segundos
  const [letters, setLetters] = useState(['', '', '', '']);
  const correctLetters = ['c', 'a', 's', 'a'];

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  const getProgressWidth = () => {
    const percentage = (seconds / 300) * 100; // 5 minutos em segundos
    return `${percentage}%`;
  };

  const handleInputChange = (index: number, value: string) => {
    const newLetters = [...letters];
    newLetters[index] = value.toLowerCase();
    setLetters(newLetters);
  };

  const checkLetters = () => {
    const isCorrect = letters.every((letter, index) => letter === correctLetters[index]);
    if (isCorrect) {
      // Redirecionar para '/about'
      console.log('Todas as letras estão corretas. Redirecionar para /about.');
    }
  };

  useEffect(() => {
    checkLetters();
  }, [letters]);

  return (
    <div className="min-h-screen relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75 blur-xs"
        src="src/activity/bg-farm.jpg"
        alt="background"
      />
      <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-700 rounded-lg z-50">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src="src/activity/house.png" alt="background" />
      </div>
      <div className="flex items-center absolute top-0 right-0 text-white text-3xl z-10 mr-4">
        <FaClock className="mt-1 mr-2 w-6" />
        {Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}
      </div>
      <div className="w-full h-10 rounded bg-gray-200 overflow-hidden mb-4 relative" style={{ top: 0 }}>
        <div className="h-full w-full bg-indigo-700" style={{ width: getProgressWidth(), transition: 'width 0.3s ease' }}></div>
      </div>
      <div className="fixed flex justify-center items-center w-screen h-screen mt-10">
        {letters.map((letter, index) => (
          <input
            key={index}
            className={`w-10 h-10 border rounded mx-2 text-center ${
              letter.toLowerCase() === correctLetters[index] ? 'bg-green-500' : 'bg-red-500'
            }`}
            maxLength={1}
            value={letter}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;

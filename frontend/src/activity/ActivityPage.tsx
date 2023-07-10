import React, { useEffect, useState } from 'react';
import { FaClock, FaArrowRight } from 'react-icons/fa';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

interface CustomWindow extends Window {
  speechSynthesis: SpeechSynthesis;
}

const ActivityPage: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(90); // 90 seconds
  const [letters, setLetters] = useState(['', '', '', '']);
  const correctLetters = ['c', 'a', 's', 'a'];
  const [showHappyFace, setShowHappyFace] = useState(false);
  const [showSadFace, setShowSadFace] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const { speechSynthesis }: CustomWindow = window;

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      // Time is up, redirect to /timeisup
      navigate('/timeisup');
    }
  }, [seconds, navigate]);

  useEffect(() => {
    // Função para falar a palavra "casa"
    const speakWord = () => {
      const utterance = new SpeechSynthesisUtterance('casa');
      speechSynthesis.speak(utterance);
    };

    // Chame a função de falar a palavra "casa" quando o componente for montado
    speakWord();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 5000); // Mostrar a imagem por 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const getProgressWidth = () => {
    const percentage = (seconds / 90) * 100; // Calculate percentage based on 90 seconds
    return `${percentage}%`;
  };

  const handleInputChange = (index: number, value: string) => {
    const newLetters = [...letters];
    newLetters[index] = value.toLowerCase();
    setLetters(newLetters);
  };

  const checkLetters = () => {
    const isCorrect = letters.every((letter, index) => letter === correctLetters[index]);
    return isCorrect;
  };

  const handleButtonClick = () => {
    const isFilled = letters.every((letter) => letter !== '');
    if (isFilled) {
      navigate('/finish');
    }
  };

  useEffect(() => {
    const isFilled = letters.every((letter) => letter !== '');
    if (isFilled) {
      const isCorrect = checkLetters();
      setShowHappyFace(isCorrect);
      setShowSadFace(!isCorrect);
    }
  }, [letters]);

  return (
    <div className="min-h-screen relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75 blur-xs"
        src="src/activity/bg-farm.jpg"
        alt="background"
      />
      {showImage && (
        <img
          className="absolute top-1 left-2 w-80 h-80 object-cover mt-60 ml-20"
          src="src/activity/fala.png"
          alt="background"
          
        />
      )}
      <div className="flex items-center fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-72 h-72 bg-indigo-700 rounded-lg flex items-center justify-center">
          <img className="w-72" src="src/activity/house.png" alt="background" />
          {(showHappyFace || showSadFace) && (
            <div className="absolute top-2 left-2">
              {showHappyFace ? (
                <HiThumbUp className="h-20 w-20 text-green-600" />
              ) : (
                <HiThumbDown className="h-20 w-20 text-red-500" />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center absolute top-0 right-0 text-white text-3xl z-10 mr-4">
        <FaClock className="mt-1 mr-2 w-6" />
        {Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}
      </div>
      <div className="w-full h-10 rounded bg-gray-500 overflow-hidden mb-4 relative" style={{ top: 0 }}>
        <div className="h-full w-full bg-indigo-700 rounded-r-full" style={{ width: getProgressWidth(), transition: 'width 0.3s ease' }}></div>
      </div>
      <div className="fixed flex justify-center items-center w-screen h-screen mt-12">
        {letters.map((letter, index) => (
          <input
            key={index}
            className={`w-28 h-28 rounded-lg mx-2 text-center ${
              letter === '' ? 'bg-indigo-700' : letter.toLowerCase() === correctLetters[index] ? 'bg-green-700' : 'bg-red-700'
            } text-8xl font-mono font-medium uppercase text-white`}
            maxLength={1}
            value={letter}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 mt-10" onClick={handleButtonClick}>
        <button className="bg-indigo-700 hover:bg-indigo-800 rounded-full p-2 text-white">
          <FaArrowRight className="w-20 h-20" />
        </button>
      </div>
    </div>
  );
};

export default ActivityPage;

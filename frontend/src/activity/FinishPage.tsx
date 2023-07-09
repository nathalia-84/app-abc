import React from 'react';
import { FaThumbsUp, FaTrophy, FaArrowLeft, FaHome, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FinishPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-500 text-white">
      <div className="flex justify-center space-x-4 mb-8 gap-20 ">
        <Link to="/activity">
          <button className="bg-yellow-400 text-indigo-900 p-4 rounded-full hover:bg-yellow-300">
            <FaArrowLeft className="w-8 h-8" />
          </button>
        </Link>
        <Link to="/">
          <button className="bg-green-400 text-indigo-900 p-4 rounded-full hover:bg-green-300">
            <FaHome className="w-8 h-8" />
          </button>
        </Link>
        <Link to="/results">
          <button className="bg-red-400 text-indigo-900 p-4 rounded-full hover:bg-red-300">
            <FaChartBar className="w-8 h-8" />
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-10 mb-8">
        <FaThumbsUp className="w-24 h-24 mb-4 text-yellow-300" />
        <FaTrophy className="w-24 h-24 text-red-300" />
      </div>
      <div className="text-2xl mb-4">
        Parabéns! Você concluiu a atividade!
      </div>
      <div className="text-lg mb-8">
        Você é incrível! Continue assim!
      </div>
      <img
        className="h-60 mb-8 rounded-lg"
        src="src/activity/dog.gif"
        alt="Fogos de artifício"
      />
      
    </div>
  );
};

export default FinishPage;

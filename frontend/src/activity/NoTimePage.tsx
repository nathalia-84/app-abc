import React from 'react';
import { FaArrowLeft, FaHome, FaChartBar } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
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
      <div className="mb-6">
        <BsClockHistory className="text-9xl mt-8 mb-6" />
      </div>
      <img
        className="h-60 mb-8 rounded-lg"
        src="src/activity/time.gif"
        alt="Coelho correndo"
      />
      
    </div>
  );
};

export default FinishPage;


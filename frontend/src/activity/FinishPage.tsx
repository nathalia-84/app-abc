import React from 'react';
import { FaThumbsUp, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FinishPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-500 text-white">
      <div className="text-4xl mb-6">
        Parabéns! Você concluiu a atividade!
      </div>
      <div className="text-2xl mb-8">
        <p>Você é incrível!</p>
        <p>Continue assim!</p>
      </div>
      <div className="flex items-center mb-4">
        <FaThumbsUp className="w-16 h-16 mr-4" />
        <FaTrophy className="w-16 h-16" />
      </div>
      <img
        className="h-40 mb-4"
        src="src/activity/dog.gif"
        alt="Fogos de artifício"
      />
      <div className="flex">
        <Link to="/activity" className="mr-4">
          <button className="bg-white text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100">
            Voltar à Atividade
          </button>
        </Link>
        <Link to="/">
          <button className="bg-white text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100">
            Voltar à Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FinishPage;

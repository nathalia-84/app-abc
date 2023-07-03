import React, { useState } from 'react';
import Navbar from './Navbar';
import Mural from './Mural';
import Trilha from './Trilha';
import Atividades from './Atividades';
import Configuracoes from './Configuracoes';
import MinhaConta from './MinhaConta';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('mural'); // Página inicial: Mural

  const renderContent = () => {
    switch (currentPage) {
      case 'mural':
        return <Mural />;
      case 'trilha':
        return <Trilha />;
      case 'atividades':
        return <Atividades />;
      case 'configuracoes':
        return <Configuracoes />;
      case 'minhaConta':
        return <MinhaConta />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Menu Lateral */}
      <div className="w-1/6 bg-white text-gray-800 border border-gray-200">
        {/* Conteúdo do Menu */}
        <div className="flex flex-col text-xl p-4 mt-20 px-5 py-10 text-gray-500 text-left">
          <button
            onClick={() => setCurrentPage('mural')}
            className={`my-2 mb-5 text-left rounded ${
              currentPage === 'mural' ? 'text-purple-700 bg-gray-200 font-semibold' : ''
            }`}
          >
            Mural
          </button>
          <button
            onClick={() => setCurrentPage('trilha')}
            className={`my-2 mb-5 text-left rounded ${
              currentPage === 'trilha' ? 'text-purple-700 bg-gray-200 font-semibold' : ''
            }`}
          >
            Trilha
          </button>
          <button
            onClick={() => setCurrentPage('atividades')}
            className={`my-2 mb-5 rounded text-left ${
              currentPage === 'atividades' ? 'text-purple-700 bg-gray-200 font-semibold' : ''
            }`}
          >
            Atividades
          </button>
          <button
            onClick={() => setCurrentPage('configuracoes')}
            className={`my-2 mb-5 text-left rounded ${
              currentPage === 'configuracoes' ? 'text-purple-700 bg-gray-200 font-semibold' : ''
            }`}
          >
            Configurações
          </button>
          <button
            onClick={() => setCurrentPage('minhaConta')}
            className={`my-2 mb-5 text-left rounded ${
              currentPage === 'minhaConta' ? 'text-purple-700 bg-gray-200 font-semibold' : ''
            }`}
          >
            Minha Conta
          </button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Conteúdo da Página */}
      <div className="flex-grow mt-40 mr-10 mb-20 ml-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;

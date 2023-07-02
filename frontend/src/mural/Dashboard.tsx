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
        <div className="flex flex-col text-xl p-4 mt-20 px-5 py-10 text-gray-500">
          <button onClick={() => setCurrentPage('mural')} className="my-2">Mural</button>
          <button onClick={() => setCurrentPage('trilha')} className="my-2">Trilha</button>
          <button onClick={() => setCurrentPage('atividades')} className="my-2">Atividades</button>
          <button onClick={() => setCurrentPage('configuracoes')} className="my-2">Configurações</button>
          <button onClick={() => setCurrentPage('minhaConta')} className="my-2">Minha Conta</button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Conteúdo da Página */}
      <div className="flex-grow bg-white border border-gray-300 ">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;

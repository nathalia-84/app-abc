import React from 'react';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Menu Lateral */}
      <div className="w-1/6 bg-white text-gray-800 border border-gray-200">
        {/* Conteúdo do Menu */}
        <div className="flex flex-col text-xl p-4 mt-20 px-5 py-10 text-gray-500">
          <a href="#" className="my-2">Mural</a>
          <a href="#" className="my-2">Trilha</a>
          <a href="#" className="my-2">Atividades</a>
          <a href="#" className="my-2">Configurações</a>
          <a href="#" className="my-2">Minha Conta</a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar/>

      {/* Conteúdo da Página */}
      <div className="flex-grow bg-white border border-gray-300">
        {/* Restante do conteúdo da página */}
      </div>
    </div>
  );
};

export default Dashboard;

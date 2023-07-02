import { FaTools } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className="min-h-screen bg-indigo-700 flex items-center justify-center">
      <div className="text-center">
        <div className="text-white text-4xl mb-4">
          <FaTools className="inline-block text-white text-6xl mb-4" />
        </div>
        <h1 className="text-white text-4xl font-bold mb-4">Em Construção</h1>
        <p className="text-white text-xl">
          Desculpe-nos pela bagunça! Estamos trabalhando duro para melhorar o
          FreirEduc.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
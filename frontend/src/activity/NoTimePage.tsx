import { GiSadCrab } from 'react-icons/gi';
import { BsClockHistory } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NoTimePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-700 text-white">
      <GiSadCrab className="text-6xl mb-4" />
      <h2 className="text-3xl font-bold mb-4">Oh não!</h2>
      <p className="text-xl text-center mb-6">
        O tempo acabou! Infelizmente, você não conseguiu concluir a atividade a tempo. Mas não se preocupe, você pode
        tentar novamente!
      </p>
      <BsClockHistory className="text-4xl" />
      <p className="text-xl text-center mt-2">Que tal tentar novamente e ser mais rápido?</p>
      <div className="flex mt-6">
        <Link to="/activity" className="mr-4">
          <button className="bg-white text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100">
            Tentar Novamente
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

export default NoTimePage;

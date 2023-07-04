import { FaTools } from 'react-icons/fa';
import Navbar from '../home/Navbar';

function InsertPin() {
  return (
    <div>
       <Navbar />
    
    <div className="min-h-screen bg-indigo-700 flex items-center justify-center">
      <div
        className="bg-cover bg-center w-screen h-screen"
        style={{
          backgroundImage: "url('./src/login/ABC.png')",
        }}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="bg-indigo-700 h-40 w-40 flex items-center justify-center">
            {/* Conteúdo da div */}
            <input type="text" />
            <button>Iniciar</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default InsertPin;

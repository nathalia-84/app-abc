import { FiSearch, FiBell } from 'react-icons/fi';

function Navbar() {
    return (
    <div className="w-full bg-indigo-700 px-4 py-3 flex items-center justify-between shadow fixed top-0 z-10">
        <div className="logo ml-4 text-xl font-bold text-white">ABC.edu</div>
        
        {/* Campo de Pesquisa */}
        <div className="flex items-center">
        <div className="w-10 h-10 ml-2 mr-2 bg-white rounded-full flex items-center justify-center">
            {/* Ícone de Notificação */}
            <button className="items-center text-indigo-700">
              <FiBell />
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none pr-10"
            />
            <button className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-10">
              <FiSearch />
            </button>
          </div>

          
        </div>
      </div> 
      );
  }
  
  export default Navbar;
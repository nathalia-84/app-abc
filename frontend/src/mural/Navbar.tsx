import { FiSearch, FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className="w-full items-center justify-between shadow fixed top-0 z-10">
        <nav className="flex items-center justify-between px-8 text-white bg-indigo-700 h-20">
          <div className="flex logo ml-4 text-xl font-bold items-center">
         <img className="w-12" src="src/home/logo.png" alt="logo" />
         <Link to="/home"> FreirEduc </Link> 
          </div>


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
              <div>
            <ul className="flex space-x-4 text-white mr-4 ml-4">
              <li><Link to="/home" className="hover:underline">Sair</Link></li>              
           </ul>
          </div>
          </div>        
        </nav>
       
      </div>
   
      );
  }
  
  export default Navbar;
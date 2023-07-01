import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 text-white bg-indigo-700 h-20">
        <div className="logo ml-4 text-xl font-bold">ABC.edu</div>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/about" className="hover:underline">Sobre</Link></li>
          <li><Link to="/guide" className="hover:underline">Trilha de Formação</Link></li>
          <li><Link to="/contact" className="hover:underline">Contato</Link></li>
        </ul>
        <ul className="flex space-x-4 text-white mr-4">
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li>|</li>
          <li><Link to="/signin" className="hover:underline">Cadastre-se</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  
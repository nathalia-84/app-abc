function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 text-white bg-indigo-700 h-20">
        <div className="logo ml-4 text-xl font-bold">ABC.edu</div>
        <ul className="flex space-x-4 text-white">
          <li><a href="/" className="hover:underline">Sobre</a></li>
          <li><a href="/posts" className="hover:underline">Trilha de Formação</a></li>
          <li><a href="/about" className="hover:underline">Contato</a></li>
        </ul>
        <ul className="flex space-x-4 text-white mr-4">
          <li><a href="/" className="hover:underline">Login</a></li>
          <li>|</li>
          <li><a href="/about" className="hover:underline">Cadastre-se</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  
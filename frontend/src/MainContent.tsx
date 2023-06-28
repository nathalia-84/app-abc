function MainContent() {
    return (
      <div>
        <div className="flex bg-indigo-700">
          <div className="text-white m-10 w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Aprendendo a ler, escrever e transformar o mundo
            </h1>
            <button className="px-4 py-2 bg-yellow-400 text-black text-base rounded-lg font-medium">
              ACESSAR SALA VIRTUAL COM PIN
            </button>
          </div>
          <img
            className="w-1/3 object-contain m-10 rounded-lg"
            src="https://images.unsplash.com/photo-1532774682361-95f0831019d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1204&q=80"
            alt="Imagem"
          />
        </div>
        <div className="flex m-10">
          <img
            className="w-1/5 rounded-lg"
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80"
            alt="Imagem"
          />
          <div className="ml-4 w-1/2">
            <h1 className="text-2xl font-bold mb-4">
              Trilha de formação de professores para a ferramenta
            </h1>
            <p>
              A trilha de formação de professores inclui conteúdos teóricos e práticos sobre o uso da plataforma.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default MainContent;
  
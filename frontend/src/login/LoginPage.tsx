import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block relative w-1/2 bg-gray-900">
        <div className="h-full">
          <img
            src="src/login/ABC.png"
            alt="abc"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 object-fill">
        <div className="mx-auto w-full max-w-sm">
          <div>
            <h2 className="mt-6 text-3xl font-semibold text-indigo-700">Entrar</h2>
            <p className="mt-2 text-sm text-gray-600 max-w">
              Novo por aqui? <a href="#" className="font-medium text-indigo-700">Cadastre-se</a>
            </p>
          </div>
          <div className="mt-6">
            <form action="">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Senha"
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
              <Link to={"/mural"}>
                <button
                  className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-700 hover:bg-indigo-600 font-semibold rounded shadow"
                >
                 Entrar
                </button>
                </Link>
              </div>
              <div className="mb-4">
                <p>
                  <a href="#">Esqueceu sua senha?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;



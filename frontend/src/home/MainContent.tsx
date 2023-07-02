import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <div>
      <div className="flex bg-indigo-700">
        <div className="text-white m-10 w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Aprendendo a ler, escrever e transformar o mundo
          </h1>
          <p className="mb-4 text-lg text-gray-200">
            O FreirEduc é um software educacional inovador que utiliza o método de Paulo Freire de alfabetização contextualizada potencializando o processo de ensino e aprendizagem. Projetado com um design simples e intuitivo, o software busca adaptar-se à realidade do aluno, celebrando a pluralidade cultural e especificidades das regiões brasileiras.
          </p>
          <Link
            to="/activity"
            className="mt-4 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-lg font-medium"
          >
            ACESSAR SALA VIRTUAL COM PIN
          </Link>
        </div>
        <div className="w-1/2 m-10">
          <img
            className="object-contain"
            src="src/home/img-two.png"
            alt="Imagem"
          />
        </div>
      </div>
      <div className="flex m-10">
        <div className="w-30">
          <img
            className="rounded-lg"
            src="src/home/img-one.png"
            alt="Imagem"
          />
        </div>
        <div className="ml-8">
          <h1 className="text-2xl font-bold mb-4">
            Trilha de formação de professores para a ferramenta
          </h1>
          <p className="mb-4 text-lg text-gray-700">
            Neste roteiro, você descobrirá como é possível tornar a aprendizagem uma experiência lúdica e extremamente divertida por meio do FreirEduc, uma plataforma de aprendizado baseada em jogos. Estamos aqui para auxiliá-lo no uso do jogo de alfabetização para crianças. Sabemos que você é um profissional certificado e possui conhecimentos básicos sobre o assunto. No entanto, além de ser um especialista, incentivamos você a demonstrar entusiasmo e interagir de forma mais ativa com seus alunos, ou melhor, com os jogadores.
          </p>
          <Link
            to="/guide"
            className="mt-4 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white text-lg rounded-lg font-medium"
          >
            Acessar Trilha de Formação
          </Link>
        </div>
      </div>
      <div className="flex m-10">
        <div className="w-30 ml-10 mr-12 ">
          <img
            className="rounded-lg"
            src="src/home/freire.jpg"
            alt="Imagem"
          />
        </div>
        <div className="ml-8">
          <h1 className="text-2xl font-bold mb-4">
            Nossa Inspiração: O Método de alfabetização Paulo Freire
          </h1>
          <p className="mb-4 text-lg text-gray-700">
            Estudado por muitos anos ao redor das maiores e mais bem avaliadas universidades do mundo, Paulo Freire e seu método de alfabetização contextualizado intitulado “método das palavras geradoras” contribui para a democratização da educação e estímulo ao pensamento crítico em todas as camadas sociais. Esse método tem como objetivo auxiliar no processo de alfabetização por meio da utilização de palavras que estão inseridas no contexto de vida dos alunos, sem mais os conhecidos bordões “Eva viu a uva”, “O boi baba”, “A ave voa”, dentre outros. Pensado como uma plataforma que utiliza desses conceitos para auxiliar o processo da alfabetização dos alunos do fundamental I, o FreirEduc é pioneiro em trazer o método das palavras geradoras para o contexto tecnológico. O software permitirá que o professor adicione as palavras do cotidiano dos alunos, ilustrando com imagens e apoio sonoro para um melhor aprimoramento do processo de ensino-aprendizagem. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

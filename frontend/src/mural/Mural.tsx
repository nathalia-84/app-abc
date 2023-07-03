import { FiSearch, FiBell } from 'react-icons/fi';

function Mural() {
    return (
      <div className="grid grid-cols-2 gap-4 mt-2 mx-2 bg-white text-lg rounded-[50px]">
        <div className="mt-4 mr-4 ml-6 mb-4 text-left">
          <h4 className="text-3xl font-semibold text-balck mt-4 mb-4 text-left">
              Treinamento do Professor
          </h4>
          <div className='bg-purple-700 h-40 rounded-[30px]'>

          </div>
        </div>
        <div className='grid grid-flow-row bg-white border text-lg border-gray-300 w-2/3 h-100 rounded-[30px] mt-8 mr-8 ml-20 mb-4' >
        <h4 className="text-3xl font-semibold text-balck mt-4 mr-4 ml-6 mb-4 text-left">
              Atividades
          </h4>
          <button className="mt-4 mr-4 ml-6 mb-4">Pronuncia de Vogais</button>
          <button className="mt-4 mr-4 ml-6 mb-4">Itens da Casa</button>
          <button className="mt-4 mr-4 ml-6 mb-4">Animais</button>
          <button className="mt-4 mr-4 ml-6 mb-4">Pronuncia de Vogais</button>
          
        </div>
        <div>

        </div>
        <div className='grid grid-flow-row bg-white border text-lg border-gray-300 w-2/3 h-100 rounded-[30px] mt-8 mr-8 ml-20 mb-4' >
        <h4 className="text-3xl font-semibold text-balck mt-4 mr-4 ml-6 mb-4 text-left">
              Trilhas Agendadas
          </h4>
          <button className="mt-4 mr-4 ml-6 mb-4">Sibalas basicas</button>
          <button className="mt-4 mr-4 ml-6 mb-4">Itens da Casa</button>
          
        </div>
      </div>

      );
  }

export default Mural;
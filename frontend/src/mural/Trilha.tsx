import React, { useState } from 'react';
import AddTrilha from '../trilha/AddTrilha';
import WordItem from '../trilha/WordItem';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Trilha() {
  const [isOpenTipo, setIsOpenTipo] = useState(false);
  const [isOpenModalidade, setIsOpenModalidade] = useState(false);
  const [selectedTipo, setSelectedTipo] = useState('palavras');
  const [selectedModalidade, setSelectedModalidade] = useState('palavras');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const toggleSelectTipo = () => {
    setIsOpenTipo(!isOpenTipo);
  };

  const toggleSelectModalidade = () => {
    setIsOpenModalidade(!isOpenModalidade);
  };

  const handleTipoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedTipo(event.target.value);
  };

  const handleModalidadeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedModalidade(event.target.value);
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <div className=''>
      <h1 className="mt-2 mr-1 mb-4 ml-10 text-lg flex-grow font-semibold text-black-400">
        CRIAR NOVA TRILHA
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-2 mx-2 bg-white border border-gray-300 rounded-[50px]">
        <div className="mt-4 mr-4 ml-4 mb-4">
          <h4 className="text-3x1 font-semibold text-gray-400 mt-4">
            INSIRA O NOME DA ATIVIDADE
          </h4>
          <input
            type="text"
            placeholder="Ex. Atividade IV"
            className="appearance-none block w-2/3 py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none"
          />
          <input type="text" />
        </div>

        <div className="mt-4">
          <WordItem />
        </div>
        <div className="mt-2 mr-4 ml-4 mb-4">
          <h4 className="mb-2 text-3x1 font-semibold text-gray-400">DESCRIÇÃO</h4>
          <input
            type="text"
            placeholder="Ex. Alguma Descrição..."
            className="appearance-none block w-2/3 py-14 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none"
          />
          <input type="text" />
        </div>

        <div className="">
          <AddTrilha />
        </div>
        <div className="mt-2 mr-4 ml-4 mb-4">
          <h4 className=" text-3x1 font-semibold text-gray-400">ESCOLHA O TIPO DA TRILHA</h4>
          <div className="relative flex items-center">
            <div
              className="flex items-center justify-between appearance-none block w-2/3 py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none"
              onClick={toggleSelectTipo}
            >
              {selectedTipo}
              <span className="ml-2">{isOpenTipo ? <BiChevronUp /> : <BiChevronDown />}</span>
            </div>
            {isOpenTipo && (
              <div className="absolute top-10 left-0 w-2/3 bg-white border border-gray-200 rounded-md shadow-md">
                <select
                  className="w-full p-2 border-none rounded-md focus:outline-none"
                  value={selectedTipo}
                  onChange={handleTipoChange}
                >
                  <option value="palavras">Palavras</option>
                  <option value="outra-opcao">Outra Opção</option>
                  <option value="mais-uma-opcao">Mais uma Opção</option>
                </select>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 mr-4 ml-4 mb-4">
          <h4 className=" text-3x1 font-semibold text-gray-400">ESCOLHA A MODALIDADE</h4>
          <div className="relative flex items-center">
            <div
              className="flex items-center justify-between appearance-none block w-2/3 py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none"
              onClick={toggleSelectModalidade}
            >
              {selectedModalidade}
              <span className="ml-2">
                {isOpenModalidade ? <BiChevronUp /> : <BiChevronDown />}
              </span>
            </div>
            {isOpenModalidade && (
              <div className="absolute top-10 left-0 w-2/3 bg-white border border-gray-200 rounded-md shadow-md">
                <select
                  className="w-full p-2 border-none rounded-md focus:outline-none"
                  value={selectedModalidade}
                  onChange={handleModalidadeChange}
                >
                  <option value="palavras">Palavras</option>
                  <option value="outra-opcao">Outra Opção</option>
                  <option value="mais-uma-opcao">Mais uma Opção</option>
                </select>
              </div>
            )}
          </div>
        </div>


        <div className="mt-2 ml-4 mr-4 mb-10 flex">
          
          <select
             className="flex items-center px-3 py-2 space-x-2 text-white bg-purple-700 border border-gray-200 rounded-md focus:outline-none"
            onChange={toggleCalendar}
            >
           <option value="iniciar-agora">Iniciar Agora</option>
            <option value="agendar">Agendar</option>
           </select>
           <button
              className="flex px-3 py-2 leading-none space-x-2 text-white bg-purple-700 border border-gray-200font-semibold rounded-md shadow"
            >
              Salvar
           </button>
        </div>



      </div>
    </div>
  );
}

export default Trilha

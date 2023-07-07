import { FiSearch, FiBell, FiClock } from 'react-icons/fi';

function Mural() {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white text-lg rounded-[50px]">
      <div className="mr-4 ml-6 mb-4 text-left">
        <h4 className="text-3x2 font-semibold text-black mt-4 mb-4 text-left">
          Treinamento do Professor
        </h4>
        <div className="bg-indigo-700 h-40 rounded-[30px]"></div>
      </div>
      <div className="grid grid-flow-row bg-white border text-lg border-gray-300 w-1/2 h-100 rounded-[30px] mt-8 mr-8 ml-20 mb-4 text-left">
        <h4 className="text-3x1 font-semibold text-black mt-4 mr-4 ml-6 mb-4 text-left">
          Atividades
        </h4>
        <div className='flex mb-4'>
          <div className='flex ml-4'>
            <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-20 rounded-sm' />
          </div>
          <div className='grid grid-flow-row'>
            <button className="mt-4 mr-4 ml-4 mb-1 text-left">          
                Itens da Casa
            </button>
            
            <div className='mb-1 mr-4'>
              <FiClock className=" ml-6 inline-block mr-2  text-gray-500 text-sm" />
              <span className="text-gray-500 text-sm ">12 horas atrás</span> 
            </div>
            <div className="border-b border-gray-300 w-70 h-px mt-2"></div>
          </div>             
        </div>
        <div className='flex mb-4'>
          <div className='flex ml-4'>
            <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-20 rounded-sm' />
          </div>
          <div className='grid grid-flow-row'>
            <button className="mt-4 mr-4 ml-4 mb-1 text-left">          
                Itens da Casa
            </button>            
            <div className='mb-1 mr-4'>
              <FiClock className=" ml-6 inline-block mr-2  text-gray-500 text-sm" />
              <span className="text-gray-500 text-sm ">12 horas atrás</span> 
            </div>
            <div className="border-b border-gray-300 w-70 h-px mt-2"></div>
          </div>             
        </div>
        <div className='flex mb-4'>
          <div className='flex ml-4'>
            <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-20 rounded-sm' />
          </div>
          <div className='grid grid-flow-row'>
            <button className="mt-4 mr-4 ml-4 mb-1 text-left">          
                Itens da Casa
            </button>            
            <div className='mb-1 mr-4'>
              <FiClock className=" ml-6 inline-block mr-2  text-gray-500 text-sm" />
              <span className="text-gray-500 text-sm ">12 horas atrás</span> 
            </div>
          </div>             
        </div>
      </div>
      <div></div>
      <div className="grid grid-flow-row bg-white border text-lg border-gray-300 w-1/2 h-100 rounded-[30px] mt-8 mr-8 ml-20 mb-4">
        <h4 className="text-3x1 font-semibold text-black mt-4 mr-4 ml-6 mb-4 text-left">
          Trilhas Agendadas
        </h4>
        <div className='flex mb-4'>
          <div className='flex ml-4'>
            <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-20 rounded-sm' />
          </div>
          <div className='grid grid-flow-row'>
            <button className="mt-4 mr-4 ml-4 mb-1 text-left">          
                Silabas Basicas
            </button>            
            <div className='mb-1 mr-4'>
              <FiClock className=" ml-6 inline-block mr-2  text-gray-500 text-sm" />
              <span className="text-gray-500 text-sm ">Daqui a duas horas</span> 
            </div>
            <div className="border-b border-gray-300 w-70 h-px mt-2"></div>
          </div>             
        </div>
        <div className='flex mb-4'>
          <div className='flex ml-4'>
            <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-20 rounded-sm' />
          </div>
          <div className='grid grid-flow-row'>
            <button className="mt-4 mr-4 ml-4 mb-1 text-left">          
                Itens da Casa
            </button>            
            <div className='mb-1 mr-4'>
              <FiClock className=" ml-6 inline-block mr-2  text-gray-500 text-sm" />
              <span className="text-gray-500 text-sm ">Daqui a duas horas</span> 
            </div>
          </div>             
        </div>
      </div>
    </div>
  );
}

export default Mural;

import { FiSearch, FiBell, FiClock } from 'react-icons/fi';

function Mural() {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white rounded-[50px]">
      <div className=" ml-6 mb-4 text-left ">
        <h4 className="text-3xl font-semibold  text-black  mb-4 text-left">
          Treinamento do Professor
        </h4>
        <div className="bg-indigo-700 h-40 rounded-[30px] text-left relative"  style={{ width: '100%', height: '55%'}}>
          <div className="flex items-center mt-4">
            <img src="https://static.vecteezy.com/system/resources/previews/019/616/868/original/woman-reading-book-png.png" alt="Imagem" className="h-32 rounded-sm ml-4 mt-4" />
            <div>
              <h5 className="text-white font-semibold text-xl ml-4 mt-4">
                Treinamento Professor
              </h5>
              <p className="text-white text-sm ml-4 mt-2">
                A trilha de formação de professores inclui conteúdos teóricos e práticos sobre o uso da plataforma.
              </p>
              <a href="#" className="text-yellow-500 font-semibold text-sm absolute bottom-4 right-4">
                Saiba mais
              </a>
              </div>
              </div>
        </div>
      </div>
      
      <div className="grid grid-flow-row bg-white border text-lg border-gray-300 h-100 rounded-[30px] mt-8 mr-8  mb-4 text-left" style={{ justifySelf: 'end',  width: '50%' }}>
        <h4 className="text-3x1 font-semibold text-black mt-4 mr-4 ml-6 mb-4 text-left">
          Atividades
          <a href="#" className='text-indigo-700 font-semibold float-right text-sm'>Ver mais</a>

        </h4>
        <div className='flex mb-4 '>
          <div className='flex ml-4'>
            <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-20 rounded-sm' />
          </div>
          <div className='grid grid-flow-row'>
            <button className="mt-4 mr-4 ml-4 mb-1 text-left">          
                Pronuncia de Vogais
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
                Animais
            </button>            
            <div className='mb-1 mr-4'>
              <FiClock className=" ml-6 inline-block mr-2  text-gray-500 text-sm" />
              <span className="text-gray-500 text-sm ">12 horas atrás</span> 
            </div>
          </div>             
        </div>
      </div>
      <div className="grid grid-flow-row bg-white border text-lg border-gray-300 h-100 rounded-[30px] mt-8 mb-4 text-left" style={{ justifySelf: 'end', width: '97%' }}>
  <h4 className="text-3xl font-semibold mt-4 mr-4 ml-6 mb-4 text-left">
    Trilhas de Aprendizado
    <a href="#" className='text-indigo-700 font-semibold float-right text-sm'>Ver tudo</a>
  </h4>
  <div className='flex'>
      <div className="bg-image1 ml-4" >
          <div className='flex'>
              <img src="https://img.freepik.com/vetores-gratis/conjunto-de-diferencas-engracadas-de-desenhos-animados-alfabetos-de-criancas-do-jardim-de-infancia-ou-pre-escola_1150-49039.jpg?w=2000" className='h-40 rounded-sm' />
          </div>
          <h5 className="text-sm font-semibold text-black text-center mb-2">Vogais</h5>
      </div>

      <div className="bg-image2 ml-6" >
      <div className='flex '>
              <img src="https://danieducar.com.br/wp-content/uploads/2020/12/Atividades-com-silabas-simples-arco-iris-7.png" className='h-40 rounded-sm' />
          
          </div>
          <h5 className="text-sm font-semibold text-black text-center mb-2">Silabas Basicas</h5>

      </div>

      <div className="bg-image3 ml-6">
      <div className='flex'>
              <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-40 rounded-sm' />
          </div>
          <h5 className="text-sm font-semibold text-black text-center mb-2">Palavras I</h5>

      </div>
      <div className="bg-image3 ml-6">
      <div className='flex'>
              <img src="https://as1.ftcdn.net/v2/jpg/00/46/37/34/1000_F_46373452_doSKTCg762J3fYtbvdhSQpWdID7ZhJMA.jpg" className='h-40 rounded-sm' />
          </div>
          <h5 className="text-sm font-semibold text-black text-center mb-2">Palavras I</h5>

      </div>
      </div>  
</div>


      <div className="grid grid-flow-row bg-white border text-lg border-gray-300 h-100 rounded-[30px] mt-8 mr-8 ml-auto mb-4 text-left" style={{ justifySelf: 'end',  width: '50%' }}>

        <h4 className="text-3x1 font-semibold text-black mt-4 mr-4 ml-6 mb-4 text-left">
          Trilhas Agendadas
          <a href="#" className='text-indigo-700 font-semibold float-right text-sm'>Ver mais</a>
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
                Vogais
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

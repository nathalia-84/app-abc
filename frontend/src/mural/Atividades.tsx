import React from 'react';

function Atividades() {
  return (
    <div className="text-black mt-8">
      
      <table style={{ borderCollapse: 'collapse', width: '50%', textAlign: 'left',margin: '0 auto' }}>
        <thead>
          <tr>
            <th className="text-3xl font-semibold "> 
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Atividades
                <div>
                  <button className="bg-indigo-700  mb-2" style={{ color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>Cadastrar Atividade</button>
                </div>
              </div>     
              </th>      
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Silabas</span>
                <div>
                  <button className="bg-indigo-700 " style={{ color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>Editar</button>
                  <button className="bg-red-700 " style={{  color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', marginLeft: '5px' }}>Excluir</button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Itens da Casa</span>
                <div>
                  <button  className="bg-indigo-700 " style={{  color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>Editar</button>
                  <button className="bg-red-700 " style={{  color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', marginLeft: '5px' }}>Excluir</button>
                </div>
              </div>
            </td>
          </tr>
          <tr>            
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Animais</span>
                <div>
                  <button className="bg-indigo-700 " style={{ color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>Editar</button>
                  <button className="bg-red-700 " style={{  color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', marginLeft: '5px' }}>Excluir</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Atividades;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Alunos() {
  return (
    <div className="font-semibold text-black">
      <h1>ALUNOS</h1>
      <div
        className="grid grid-flow-col gap-4"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Card
          style={{ width: '15rem', height: '20rem' }}
          className="border border-gray-200"
        >
          <Card.Img
            variant="top"
            src="./src/mural/avatar2.avif"
          />
          <Card.Body>
            <Card.Title className="text-3x1">Jõao Pedro</Card.Title>
            <Button
              variant="primary"
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-700 hover:bg-indigo-600 font-semibold rounded shadow mr-2"
            >
              Acessar
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '15rem', height: '20rem' }}
          className="border border-gray-200"
        >
          <Card.Img
            variant="top"
            src="./src/mural/avatar.webp"
          />
          <Card.Body>
            <Card.Title className="text-3x1">Valentina Maria</Card.Title>
            <Button
              variant="primary"
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-700 hover:bg-indigo-600 font-semibold rounded shadow mr-2"
            >
              Acessar
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '15rem', height: '20rem' }}
          className="border border-gray-200"
        >
          <Card.Img
            variant="top"
            src="./src/mural/avatar1.png"
          />
          <Card.Body>
            <Card.Title className="text-3x1">Matheus Costa</Card.Title>
            <Button
              variant="primary"
              className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-700 hover:bg-indigo-600 font-semibold rounded shadow mr-2"
            >
              Acessar
            </Button>
          </Card.Body>
        </Card>
        
      </div>
    </div>
  );
}

export default Alunos;

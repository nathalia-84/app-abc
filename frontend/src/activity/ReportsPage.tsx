import React from 'react';
import { FaChartBar, FaUsers } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReportPage: React.FC = () => {
  const students = [
    { id: 1, name: 'Pedro', Palavras_Completadas: 3 },
    { id: 2, name: 'Gabriela', Palavras_Completadas: 4 },
    { id: 3, name: 'Lucas', Palavras_Completadas: 5 },
    { id: 4, name: 'Laura', Palavras_Completadas: 2 },
    { id: 5, name: 'Mariana', Palavras_Completadas: 5 },
    { id: 6, name: 'Rafael', Palavras_Completadas: 3 },
    { id: 7, name: 'Isabela', Palavras_Completadas: 4 },
    { id: 8, name: 'Gustavo', Palavras_Completadas: 5 },
    { id: 9, name: 'Larissa', Palavras_Completadas: 4 },
    { id: 10, name: 'Tiago', Palavras_Completadas: 3 },
  ];

  const totalStudents = students.length;
  const totalWords = students.reduce((total, student) => total + student.Palavras_Completadas, 0);
  const averageWords = totalWords / totalStudents;

  const chartData = students.map((student) => ({
    name: student.name,
    Palavras_Completadas: student.Palavras_Completadas,
  }));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-900 text-white">
         <div className="flex justify-center space-x-4 mb-8 gap-20">
        <Link to="/">
          <button className="bg-white text-indigo-700 p-4 rounded-full hover:bg-indigo-100">
            <FaHome className="w-8 h-8" />
          </button>
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-8">Relatório do Professor</h2>
      <div className="w-full max-w-3xl bg-indigo-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <FaUsers className="w-6 h-6 mr-2" />
            <p>Total de Alunos: {totalStudents}</p>
          </div>
          <div className="flex items-center">
            <FaChartBar className="w-6 h-6 mr-2" />
            <p>Total de Palavras Completas: {totalWords}</p>
          </div>
        </div>
        <div className="p-4">
          <BarChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Palavras_Completadas" fill="#ffbb33" />
          </BarChart>
        </div>
      </div>
      <div className="text-2xl mt-8">
        <p>Média de Palavras Completas por Aluno: {averageWords.toFixed(2)}</p>
      </div>
      <button className="bg-white text-indigo-700 py-2 px-4 rounded-lg mt-8 hover:bg-indigo-100">
        Exportar Relatório
      </button>
    </div>
  );
};

export default ReportPage;

import React, { useState } from 'react';
import AddImage from './ImageUploadButton.tsx'

interface WordItem {
  id: number;
  word: string;
}

const WordItem: React.FC = () => {
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState<WordItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleInsertWord = () => {
    if (word.trim() !== '') {
      const newWordItem: WordItem = {
        id: Date.now(),
        word: word
      };

      setWordList(prevList => [...prevList, newWordItem]);
      setWord('');
    }
  };

  const handleAddImage = () => {
    // Lógica para adicionar imagem
  };
  
  const handleRemoveWord = (wordToRemove: string) => {
    setWordList(prevList => prevList.filter(item => item.word !== wordToRemove));
  };

  return (
    <div className='mt-4 mr-4 ml-4 mb-4'>
      <h4 className="text-3x1 font-semibold text-gray-400">INSERIR AS PALAVRAS</h4>
      <input
        className='mr-2  appearance-none py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-md focus:outline-none'
        type="text"
        value={word}
        onChange={handleInputChange}
        placeholder="Digite uma palavra"
      />
      <AddImage />      
      <button onClick={handleInsertWord} className='mb-4 py-1 px-2 inline-block leading-none text-white bg-purple-700 hover:bg-purple-700 font-semibold rounded shadow py-3 px-4 '>Inserir</button>
      <div className='bg-gray-200 word-list flex space-x-2 w-1/2 flex-wrap'>
        {wordList.map(item => (
          <div key={item.id} className='flex items-center mb-2 mt-2 mr-2 ml-2 bg-purple-500 rounded'>
            <span className='flex space-x ml-2'>{item.word}</span>
            <button onClick={() => handleRemoveWord(item.word)} className="ml-2 mr-2 text-red-600">X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordItem

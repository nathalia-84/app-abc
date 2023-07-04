import AddTrilha from "../trilha/AddTrilha";
import WordItem from "../trilha/WordItem";


interface CustomWindow extends Window {
  speechSynthesis: SpeechSynthesis;
}

const windowWithSpeechSynthesis = window as CustomWindow;

const reproduzirSom = (palavra: string) => {
  if ('speechSynthesis' in windowWithSpeechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(palavra);
    windowWithSpeechSynthesis.speechSynthesis.speak(utterance);
  } else {
    console.error('Web Speech API não suportada neste navegador.');
  }
};


function Trilha() {
    return (

    <div className=" text-black flex-grow">
        
        <button onClick={() => reproduzirSom('casa')}>Reproduzir Som</button>

        
    </div>
      );
  }


export default Trilha;
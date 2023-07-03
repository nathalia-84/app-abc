import AddTrilha from "../trilha/AddTrilha";
import WordItem from "../trilha/WordItem";

function Trilha() {
    return (

    <div className=" text-black flex-grow">
        <WordItem/>
        <AddTrilha/>
        
    </div>
      );
  }


export default Trilha;
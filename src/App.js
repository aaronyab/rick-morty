import imagen from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Character from "./Character";

function App() {
  const [characters, setCharacters] = useState(null)
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const caracterApi = await api.json()
    setCharacters(caracterApi.results);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
        
        <img src={imagen} alt="Rick & Morty" className='img-home' />
        <button onClick={reqApi} className="btn-search"> Buscar Personajes</button> 
         </>
        )}
      </header>
    </div>
  );
}

export default App;

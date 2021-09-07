import { useEffect, useState } from "react";
import "./App.css";
import Chacarcters from "./components/Characters";
function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(characterList);
  return (
    <div className="App">
      <Chacarcters characterList={characterList} />
    </div>
  );
}

export default App;

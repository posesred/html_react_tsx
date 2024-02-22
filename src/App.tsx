import "./App.css";
import "./css/style.css";
//I was unable to import reset.css modularly becuase it was somehow messing wit styles so put it in index.html direclty
import { Character } from "./data";
import { Header } from "./components/Header/header";
import { CharacterRating } from "./components/CharacterRating/characterRating";
import { CreateCharacterCardsClass } from "./components/CreateCharacterCardsClass/createCharacterCardsClass";
function App() {
  return (
    <>
      <Header />
      <CharacterRating characters={Character} />
      <CreateCharacterCardsClass character={Character} />
    </>
  );
}

export default App;

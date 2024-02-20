import "./App.css";
import { Character } from "./data";
import { Header } from "./functions/header";
import { CharacterRating } from "./functions/characterRating";
import { CreateCharacterCardsClass } from "./class/createCharacterCardsClass";

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

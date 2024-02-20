import { characterType } from "../types";

export function CreateCharacterCardsFunction({
  characters,
}: {
  characters: characterType[];
}) {
  return (
    <div className="card-container" id="card-container">
      {characters.map((char) => (
        <div key={char.name} className="card">
          <div className="card-titles">
            <h3>{char.name}</h3>
            <h4>{char.nickName || "None"}</h4>
          </div>
          <img src={char.imageUrl} alt={char.name} />
          <p>{char.background}</p>
        </div>
      ))}
    </div>
  );
}

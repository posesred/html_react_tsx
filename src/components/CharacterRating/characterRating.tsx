import { characterType } from "../../types";
import "./character-ratings.css";
export function CharacterRating({
  characters,
}: {
  characters: characterType[];
}) {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {characters
          .sort((a, b) => b.votes - a.votes)
          .slice(0, 5)
          .map((char, index) => (
            <tr key={char.name} className={index % 2 === 0 ? "light" : "dark"}>
              <td>{char.name}</td>
              <td>
                {Array.isArray(char.skillset) ? char.skillset.join(", ") : ""}
              </td>
              <td>{char.votes}</td>
            </tr>
          ))}
      </table>
    </section>
  );
}

import { Component } from "react";
import { characterType } from "../../types";
import "./character-cards.css";
type PropTypes = {
  character: characterType[];
};
export class CreateCharacterCardsClass extends Component<PropTypes> {
  render() {
    const { character } = this.props;
    return (
      <div className="card-container" id="character-cards">
        {character.map((char) => (
          <div key={char.name} className="card">
            <div className="card-titles">
              <h3>{char.name}</h3>

              {char.nickName && <h4>{char.nickName}</h4>}
            </div>
            <img src={char.imageUrl} alt={char.name} />
            <p>{char.background}</p>
          </div>
        ))}
      </div>
    );
  }
}

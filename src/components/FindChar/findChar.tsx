import { characterType } from "../../types";

type charType = {
  character: characterType[];
};

export function findChar(char: charType) {
  const charFound = char.character.find(
    (item) => item.name === "Alfonse Elrich"
  );
  console.log(charFound);
}
// just me having a bit of a fun

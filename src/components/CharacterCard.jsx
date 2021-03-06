import PropTypes from "prop-types";
import { SpeciesIcons, StatusIcons } from "./Icons";
import "../stylesheet/layout/characterCard.scss";

function CharacterCard({ card }) {
  return (
    <>
      <img src={card.image} alt={card.name} className="cardCharacter__img" />{" "}
      <div className="cardCharacter__container">
        {card.name} <SpeciesIcons species={card.species} />{" "}
        <StatusIcons status={card.status} />
      </div>
    </>
  );
}
export { CharacterCard };

CharacterCard.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.object,
};

import "./charCard.css";
const CharCard = ({ characterList }) => {
  return (
    <>
      {characterList.map((character) => (
        <div className="box" key={character.id}>
          <div className={character.status}>
            <h1>{character.name}</h1>
            <figure>
              <img src={character.image}></img>
            </figure>
            <p>{character.species}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default CharCard;

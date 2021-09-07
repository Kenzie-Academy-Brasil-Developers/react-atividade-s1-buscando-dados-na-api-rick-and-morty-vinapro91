import CharCard from "../CharCard/";
import "./characters.css";
const Chacarcters = ({ characterList }) => {
  return (
    <>
      <h1> Meus Personagens</h1>
      <div className="main">
        <CharCard characterList={characterList}></CharCard>
      </div>
    </>
  );
};
export default Chacarcters;
